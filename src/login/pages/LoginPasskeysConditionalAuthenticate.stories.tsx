import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-passkeys-conditional-authenticate.ftl" });

const meta = {
    title: "login/login-passkeys-conditional-authenticate.ftl",
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
                shouldDisplayAuthenticators: true,
                usernameHidden: false,
                login: {
                    username: "john.doe@example.com"
                }
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
                shouldDisplayAuthenticators: true,
                usernameHidden: false,
                login: {
                    username: "jane.smith@company.com"
                }
            }}
        />
    )
};

export const WithUsernameHidden: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
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
                shouldDisplayAuthenticators: true,
                usernameHidden: true,
                login: {
                    username: "hidden@example.com"
                }
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
                shouldDisplayAuthenticators: true,
                usernameHidden: false,
                login: {
                    username: "newuser@example.com"
                }
            }}
        />
    )
};

export const WithUsernameError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
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
                shouldDisplayAuthenticators: true,
                usernameHidden: false,
                login: {
                    username: "invalid@example.com"
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "username",
                    get: (fieldName: string) => (fieldName === "username" ? "Username is required." : undefined)
                }
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
                shouldDisplayAuthenticators: true,
                usernameHidden: false,
                login: {
                    username: "test@example.com"
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
                shouldDisplayAuthenticators: true,
                usernameHidden: false,
                login: {
                    username: "jean.dupont@exemple.fr"
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
                shouldDisplayAuthenticators: true,
                usernameHidden: false,
                login: {
                    username: "hans.mueller@beispiel.de"
                }
            }}
        />
    )
};
