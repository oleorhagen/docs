package session

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

func DisableAndDeleteSessions(ctx context.Context, identityId string) (err error) {
	// highlight-start
	_, err = ory.IdentityApi.DeleteIdentitySessions(ContextWithToken(ctx), identityId).
		Execute()
	// highlight-end
	return err
}
