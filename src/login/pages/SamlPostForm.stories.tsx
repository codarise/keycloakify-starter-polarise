import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "saml-post-form.ftl" });

const meta = {
    title: "login/saml-post-form.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithSAMLRequest: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                samlPost: {
                    url: "https://saml-provider.example.com/sso",
                    SAMLRequest: "PHNhbWxwOkF1dGhuUmVxdWVzdCB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIiB4bWxuczpzYW1sPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIiBJRD0iXzEyMzQ1Njc4OTAiIFZlcnNpb249IjIuMCIgSXNzdWVJbnN0YW50PSIyMDI0LTAxLTE1VDEwOjAwOjAwWiIgRGVzdGluYXRpb249Imh0dHBzOi8vc2FtbC1wcm92aWRlci5leGFtcGxlLmNvbS9zc28iPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg==",
                    SAMLResponse: undefined,
                    relayState: "relay-state-123"
                }
            }}
        />
    )
};

export const WithSAMLResponse: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                samlPost: {
                    url: "https://saml-provider.example.com/acs",
                    SAMLRequest: undefined,
                    SAMLResponse: "PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiIHhtbG5zOnNhbWw9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iIElEPSJfOTg3NjU0MzIxMCIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjQtMDEtMTVUMTA6MDA6MDBaIj48L3NhbWxwOlJlc3BvbnNlPg==",
                    relayState: "relay-state-456"
                }
            }}
        />
    )
};

export const WithRelayState: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                samlPost: {
                    url: "https://saml-provider.example.com/sso",
                    SAMLRequest: "PHNhbWxwOkF1dGhuUmVxdWVzdA==",
                    SAMLResponse: undefined,
                    relayState: "https://myapp.example.com/callback"
                }
            }}
        />
    )
};

export const WithLongRelayState: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                samlPost: {
                    url: "https://saml-provider.example.com/sso",
                    SAMLRequest: "PHNhbWxwOkF1dGhuUmVxdWVzdA==",
                    SAMLResponse: undefined,
                    relayState: "https://very-long-domain-name.example.com/very/long/path/with/many/segments/that/might/cause/layout/issues"
                }
            }}
        />
    )
};

export const WithStorybookUrl: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                samlPost: {
                    url: "#",
                    SAMLRequest: "PHNhbWxwOkF1dGhuUmVxdWVzdA==",
                    SAMLResponse: undefined,
                    relayState: "storybook-test"
                }
            }}
        />
    )
};

export const WithFrenchLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                samlPost: {
                    url: "https://saml-provider.example.com/sso",
                    SAMLRequest: "PHNhbWxwOkF1dGhuUmVxdWVzdA==",
                    SAMLResponse: undefined,
                    relayState: "relay-state-fr"
                }
            }}
        />
    )
};

export const WithGermanLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "de"
                },
                samlPost: {
                    url: "https://saml-provider.example.com/sso",
                    SAMLRequest: "PHNhbWxwOkF1dGhuUmVxdWVzdA==",
                    SAMLResponse: undefined,
                    relayState: "relay-state-de"
                }
            }}
        />
    )
};
