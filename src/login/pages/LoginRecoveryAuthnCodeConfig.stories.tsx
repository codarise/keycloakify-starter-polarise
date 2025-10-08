import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-recovery-authn-code-config.ftl" });

const meta = {
    title: "login/login-recovery-authn-code-config.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory    
            kcContext={{
                realm: {
                    internationalizationEnabled: true,
                    registrationEmailAsUsername: true
                }
            }}
        />
    )
};
/**
 * WithUsernameError:
 * - Purpose: Tests behavior when an error occurs with the username input (e.g., invalid username).
 * - Scenario: The component displays an error message next to the username input field.
 * - Key Aspect: Ensures the username input shows error messages when validation fails.
 */
export const WithUsernameError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    internationalizationEnabled: false,
                    registrationEmailAsUsername: false,
                },
                url: {
                    loginAction: "/mock-login-action",
                    loginUrl: "/mock-login-url"
                },
                messagesPerField: {
                    existsError: (field: string) => field === "username",
                    get: () => "Invalid username"
                },
                auth: {
                    attemptedUsername: "invalid_user"
                }
            }}
        />
    )
};
