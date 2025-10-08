import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-idp-link-confirm.ftl" });

const meta = {
    title: "login/login-idp-link-confirm.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithGoogleIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "google"
            }}
        />
    )
};

export const WithGitHubIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "github"
            }}
        />
    )
};

export const WithMicrosoftIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "microsoft"
            }}
        />
    )
};

export const WithFacebookIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "facebook"
            }}
        />
    )
};

export const WithTwitterIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "twitter"
            }}
        />
    )
};

export const WithLinkedInIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "linkedin"
            }}
        />
    )
};

export const WithCustomIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "custom-provider"
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
                idpAlias: "google"
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
                idpAlias: "github"
            }}
        />
    )
};

export const WithSpanishLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "es"
                },
                idpAlias: "microsoft"
            }}
        />
    )
};

export const WithLongIdpName: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "very-long-identity-provider-name"
            }}
        />
    )
};

export const WithSpecialCharactersIdp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                idpAlias: "idp-with-special-chars_123"
            }}
        />
    )
};
