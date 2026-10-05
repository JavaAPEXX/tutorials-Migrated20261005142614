import React, { useEffect, useRef } from 'react';

// Define the structure of the data expected from the backend
// Based on google.visualization.arrayToDataTable usage, the data is likely an array of arrays
// where the first row is headers and subsequent rows are data points.
interface MetricData {
  headers: string[];
  rows: (string | number | null)[][];
}

const MetricGraph: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const loadChart = async () => {
      try {
        // Load Google Visualization API
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://www.gstatic.com/charts/loader.js';
          script.onload = () => {
            // @ts-ignore - google is a global variable provided by the script
            window.google.charts.load('current', { packages: ['corechart'] });
            // @ts-ignore
            window.google.charts.setOnLoadCallback(() => {
              if (isMounted) {
                fetchChartData();
              }
              resolve();
            });
          };
          script.onerror = () => reject(new Error('Failed to load Google Charts'));
          document.head.appendChild(script);
        });
      } catch (err) {
        if (isMounted) {
          setError('Failed to load charting library.');
          setLoading(false);
        }
      }
    };

    const fetchChartData = async () => {
      try {
        // The original JSP uses $.get to fetch data from /metrics/metric-graph-data
        // We replicate this behavior using fetch
        const response = await fetch('/metrics/metric-graph-data');
        if (!response.ok) {
          throw new Error('Failed to fetch metric data');
        }
        
        // The original code passes the raw response to arrayToDataTable.
        // arrayToDataTable expects an array of arrays.
        // If the backend returns JSON, we parse it. If it returns CSV or other format, 
        // we might need to handle it differently, but assuming JSON array of arrays based on common patterns.
        const data = await response.json();
        
        if (isMounted) {
          drawChart(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Error loading metric data.');
          setLoading(false);
        }
      }
    };

    const drawChart = (data: any) => {
      if (!chartRef.current) return;

      try {
        // @ts-ignore - google is a global variable
        const dataTable = window.google.visualization.arrayToDataTable(data);
        
        const options = {
          title: 'Website Metric',
          hAxis: {
            title: 'Time',
            titleTextStyle: {
              color: '#333'
            }
          },
          vAxis: {
            minValue: 0
          },
          // Modernization: Add some responsive and visual enhancements
          chartArea: {
            width: '90%',
            height: '70%'
          },
          legend: {
            position: 'bottom'
          },
          backgroundColor: 'transparent'
        };

        // @ts-ignore - google is a global variable
        const chart = new window.google.visualization.AreaChart(chartRef.current);
        chart.draw(dataTable, options);
      } catch (err) {
        if (isMounted) {
          setError('Error rendering chart.');
          setLoading(false);
        }
      }
    };

    loadChart();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="modern-container">
      <div className="modern-card">
        <div className="card-header">
          <h1 className="card-title">Metric Graph</h1>
        </div>
        <div className="card-body">
          {loading && (
            <div className="alert-box alert-info">
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading chart...
            </div>
          )}
          {error && (
            <div className="alert-box alert-danger">
              <strong>Error:</strong> {error}
            </div>
          )}
          <div 
            id="chart_div" 
            ref={chartRef} 
            style={{ 
              width: '100%', 
              height: '500px', 
              minWidth: '300px',
              display: loading || error ? 'none' : 'block' 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MetricGraph;