import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface CustomerInfo {
  customerId: number;
  customerName: string;
  customerContact: string;
  customerEmail: string;
}

const CustomerView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<CustomerInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const fetchCustomer = async () => {
      try {
        const response = await fetch(`/customer-info/${id}`, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data: CustomerInfo = await response.json();
        setCustomer(data);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="modern-container">
        <div className="modern-card">
          <p>Loading customer information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modern-container">
        <div className="modern-card">
          <div className="alert-box">{error}</div>
        </div>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="modern-container">
        <div className="modern-card">
          <p>No customer data found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2>Submitted Customer Information</h2>
        <div className="modern-table-wrapper">
          <table className="table">
            <tbody>
              <tr>
                <td className="form-label">Customer Id :</td>
                <td>{customer.customerId}</td>
              </tr>
              <tr>
                <td className="form-label">Customer Name :</td>
                <td>{customer.customerName}</td>
              </tr>
              <tr>
                <td className="form-label">Customer Contact :</td>
                <td>{customer.customerContact}</td>
              </tr>
              <tr>
                <td className="form-label">Customer Email :</td>
                <td>{customer.customerEmail}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>