import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "info.ftl" });

const meta = {
    title: "login/info.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithBasicMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Success",
                message: {
                    summary: "Your account has been updated successfully."
                }
            }}
        />
    )
};

export const WithRequiredActions: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Action Required",
                message: {
                    summary: "Please complete the following actions:"
                },
                requiredActions: ["VERIFY_EMAIL", "UPDATE_PASSWORD"]
            }}
        />
    )
};

export const WithPageRedirectUri: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Redirecting",
                message: {
                    summary: "You will be redirected to the application."
                },
                pageRedirectUri: "https://myapp.example.com/dashboard"
            }}
        />
    )
};

export const WithActionUri: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Continue",
                message: {
                    summary: "Please proceed with the next action."
                },
                actionUri: "https://auth.example.com/continue"
            }}
        />
    )
};

export const WithClientBaseUrl: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Welcome",
                message: {
                    summary: "You have successfully logged in."
                },
                client: {
                    baseUrl: "https://myapp.example.com"
                }
            }}
        />
    )
};

export const WithSkipLink: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Information",
                message: {
                    summary: "This is an informational message."
                },
                skipLink: true
            }}
        />
    )
};

export const WithHtmlMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Important Notice",
                message: {
                    summary: "Please read the <strong>terms and conditions</strong> before proceeding. <a href='#'>Click here</a> for more information."
                }
            }}
        />
    )
};

export const WithLongMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Detailed Information",
                message: {
                    summary: "This is a very long message that contains detailed information about the current status of your account and the actions that have been taken. It includes multiple paragraphs of text that should be properly formatted and displayed in the interface."
                }
            }}
        />
    )
};

export const WithMultipleRequiredActions: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Multiple Actions Required",
                message: {
                    summary: "Please complete all required actions:"
                },
                requiredActions: ["VERIFY_EMAIL", "UPDATE_PASSWORD", "CONFIGURE_TOTP", "UPDATE_PROFILE"]
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
                messageHeader: "Succès",
                message: {
                    summary: "Votre compte a été mis à jour avec succès."
                },
                pageRedirectUri: "https://monapp.example.com/dashboard"
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
                messageHeader: "Erfolg",
                message: {
                    summary: "Ihr Konto wurde erfolgreich aktualisiert."
                },
                requiredActions: ["VERIFY_EMAIL", "UPDATE_PASSWORD"]
            }}
        />
    )
};