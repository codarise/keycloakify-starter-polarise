import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "error.ftl" });

const meta = {
    title: "login/error.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithBasicError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "An error occurred while processing your request."
                }
            }}
        />
    )
};

export const WithAuthenticationError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Authentication failed. Please check your credentials and try again."
                }
            }}
        />
    )
};

export const WithAuthorizationError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "You do not have permission to access this resource."
                }
            }}
        />
    )
};

export const WithSessionExpiredError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Your session has expired. Please log in again."
                }
            }}
        />
    )
};

export const WithClientBaseUrl: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "An error occurred. Please try again."
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
                message: {
                    summary: "An error occurred. Please contact support."
                },
                skipLink: true
            }}
        />
    )
};

export const WithHtmlErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Error: <strong>Invalid request</strong>. Please check your input and <a href='#'>contact support</a> if the problem persists."
                }
            }}
        />
    )
};

export const WithLongErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "A detailed error has occurred that requires immediate attention. This error message contains extensive information about what went wrong, including specific details about the failure point, potential causes, and recommended actions to resolve the issue."
                }
            }}
        />
    )
};

export const WithNetworkError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Network connection error. Please check your internet connection and try again."
                },
                client: {
                    baseUrl: "https://myapp.example.com"
                }
            }}
        />
    )
};

export const WithServerError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Internal server error. Our team has been notified. Please try again later."
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
                message: {
                    summary: "Une erreur s'est produite lors du traitement de votre demande."
                },
                client: {
                    baseUrl: "https://monapp.example.com"
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
                message: {
                    summary: "Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten."
                }
            }}
        />
    )
};
