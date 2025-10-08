import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";
import type { Attribute } from "keycloakify/login";

const { KcPageStory } = createKcPageStory({ pageId: "logout-confirm.ftl" });

const meta = {
    title: "login/logout-confirm.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithEmailAlreadyExists: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                logoutConfirm: {
                    code: "123456"
                },
                messagesPerField: {
                    // NOTE: The other functions of messagesPerField are derived from get() and
                    // existsError() so they are the only ones that need to mock.
                    existsError: (fieldName: string, ...otherFieldNames: string[]) => [fieldName, ...otherFieldNames].includes("email"),
                    get: (fieldName: string) => (fieldName === "email" ? "Email already exists." : undefined)
                }
            }}
        />
    )
};

export const WithRestrictedToMITStudents: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                
                "x-keycloakify": {
                    messages: {
                        "profile.attributes.email.inputHelperTextBefore": "Please use your MIT or Berkeley email.",
                        "profile.attributes.email.pattern.error":
                            "This is not an MIT (<strong>@mit.edu</strong>) nor a Berkeley (<strong>@berkeley.edu</strong>) email."
                    }
                }
            }}
        />
    )
};

export const WithFavoritePet: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                
                "x-keycloakify": {
                    messages: {
                        "profile.attributes.favoritePet": "Favorite Pet",
                        "profile.attributes.favoritePet.options.cat": "Fluffy Cat",
                        "profile.attributes.favoritePet.options.dog": "Loyal Dog",
                        "profile.attributes.favoritePet.options.fish": "Peaceful Fish"
                    }
                }
            }}
        />
    )
};

export const WithNewsletter: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
           
            }}
        />
    )
};

export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    registrationEmailAsUsername: true
                },
            }}
        />
    )
};

export const WithRecaptcha: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                scripts: ["https://www.google.com/recaptcha/api.js?hl=en"],
            }}
        />
    )
};

export const WithRecaptchaFrench: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                scripts: ["https://www.google.com/recaptcha/api.js?hl=fr"],
            }}
        />
    )
};

export const WithPasswordMinLength8: Story = {
    render: () => (
        <KcPageStory
            kcContext={{

            }}
        />
    )
};

export const WithTermsAcceptance: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: "<a href='https://example.com/terms'>Service Terms of Use</a>"
                    }
                }
            }}
        />
    )
};
export const WithTermsNotAccepted: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "termsAccepted",
                    get: (fieldName: string) => (fieldName === "termsAccepted" ? "You must accept the terms." : undefined)
                }
            }}
        />
    )
};
export const WithFieldErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                logoutConfirm: {
                    code: "123456"
                },
                messagesPerField: {
                    existsError: (fieldName: string) => ["code"].includes(fieldName),
                    get: (fieldName: string) => {
                        if (fieldName === "code") return "Invalid code.";
                    }
                }
            }}
        />
    )
};
export const WithReadOnlyFields: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                logoutConfirm: {
                    code: "123456"
                }
            }}
        />
    )
};
export const WithAutoGeneratedUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                logoutConfirm: {
       
                }
            }}
        />
    )
};
