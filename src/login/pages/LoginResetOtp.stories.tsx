import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-reset-otp.ftl" });

const meta = {
    title: "login/login-reset-otp.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithSingleOtpCredential: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                configuredOtpCredentials: {
                    selectedCredentialId: "cred-1",
                    userOtpCredentials: [
                        {
                            id: "cred-1",
                            userLabel: "My Phone"
                        }
                    ]
                }
            }}
        />
    )
};

export const WithMultipleOtpCredentials: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                configuredOtpCredentials: {
                    selectedCredentialId: "cred-2",
                    userOtpCredentials: [
                        {
                            id: "cred-1",
                            userLabel: "iPhone"
                        },
                        {
                            id: "cred-2",
                            userLabel: "Google Authenticator"
                        },
                        {
                            id: "cred-3",
                            userLabel: "Backup Device"
                        }
                    ]
                }
            }}
        />
    )
};

export const WithLongCredentialNames: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                configuredOtpCredentials: {
                    selectedCredentialId: "cred-1",
                    userOtpCredentials: [
                        {
                            id: "cred-1",
                            userLabel: "Very Long Authenticator App Name That Might Cause Layout Issues"
                        },
                        {
                            id: "cred-2",
                            userLabel: "Another Very Long Device Name With Special Characters & Numbers 123"
                        }
                    ]
                }
            }}
        />
    )
};

export const WithError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                configuredOtpCredentials: {
                    selectedCredentialId: "cred-1",
                    userOtpCredentials: [
                        {
                            id: "cred-1",
                            userLabel: "My Phone"
                        }
                    ]
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "totp",
                    get: (fieldName: string) => (fieldName === "totp" ? "Failed to reset OTP. Please try again." : undefined)
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
                configuredOtpCredentials: {
                    selectedCredentialId: "cred-1",
                    userOtpCredentials: [
                        {
                            id: "cred-1",
                            userLabel: "Mon Téléphone"
                        },
                        {
                            id: "cred-2",
                            userLabel: "Authentificateur Google"
                        }
                    ]
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
                configuredOtpCredentials: {
                    selectedCredentialId: "cred-1",
                    userOtpCredentials: [
                        {
                            id: "cred-1",
                            userLabel: "Mein Handy"
                        },
                        {
                            id: "cred-2",
                            userLabel: "Google Authenticator"
                        }
                    ]
                }
            }}
        />
    )
};
