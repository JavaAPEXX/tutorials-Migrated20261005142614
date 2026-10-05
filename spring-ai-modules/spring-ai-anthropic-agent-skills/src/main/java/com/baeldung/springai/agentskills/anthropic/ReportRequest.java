package com.baeldung.springai.agentskills.anthropic;

import jakarta.validation.constraints.NotNull;

public record ReportRequest(@NotNull String prompt) {
}
