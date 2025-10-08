import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "webauthn-authenticate.ftl" });

const meta = {
    title: "login/webauthn-authenticate.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithSingleAuthenticator: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred-1",
                            label: "My iPhone",
                            createdAt: "2024-01-15",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["internal"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
            }}
        />
    )
};

export const WithMultipleAuthenticators: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred-1",
                            label: "iPhone 15 Pro",
                            createdAt: "2024-01-15",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["internal", "hybrid"]
                            }
                        },
                        {
                            credentialId: "cred-2",
                            label: "MacBook Pro",
                            createdAt: "2024-01-10",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["internal"]
                            }
                        },
                        {
                            credentialId: "cred-3",
                            label: "YubiKey 5 NFC",
                            createdAt: "2024-01-05",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["usb", "nfc"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
            }}
        />
    )
};

export const WithRegistrationAllowed: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    registrationAllowed: true
                },
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred-1",
                            label: "My Device",
                            createdAt: "2024-01-15",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["internal"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
            }}
        />
    )
};

export const WithLongAuthenticatorNames: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred-1",
                            label: "Very Long Authenticator Name That Might Cause Layout Issues and Should Be Tested",
                            createdAt: "2024-01-15",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["internal", "hybrid", "usb", "nfc", "ble"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
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
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred-1",
                            label: "Mon iPhone",
                            createdAt: "2024-01-15",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["internal"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
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
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred-1",
                            label: "Mein iPhone",
                            createdAt: "2024-01-15",
                            transports: {
                                iconClass: "kcWebAuthnDefaultIcon",
                                displayNameProperties: ["internal"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
            }}
        />
    )
};
