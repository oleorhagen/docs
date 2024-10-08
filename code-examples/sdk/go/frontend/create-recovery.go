package frontend

import (
	"context"
	"fmt"
	"os"

	"github.com/ory/client-go"
)

type oryMiddleware struct {
	ory *ory.APIClient
}

func init() {
	cfg := client.NewConfiguration()
	cfg.Servers = client.ServerConfigurations{
		{URL: fmt.Sprintf("https://%s.projects.oryapis.com", os.Getenv("ORY_PROJECT_SLUG"))},
	}

	ory = client.NewAPIClient(cfg)
}

func CreateRecovery(ctx context.Context) (*client.RecoveryFlow, error) {
	// highlight-start
	flow, _, err := ory.FrontendApi.CreateNativeRecoveryFlow(ctx).Execute()
	if err != nil {
		return nil, err
	}

	return flow, nil
	// highlight-end
}
