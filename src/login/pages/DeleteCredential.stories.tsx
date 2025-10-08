import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "delete-credential.ftl" });

const meta = {
    title: "login/delete-credential.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithBasicCredential: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                credentialLabel: "My iPhone"
            }}
        />
    )
};

export const WithLongCredentialName: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                credentialLabel: "Very Long Authenticator Name That Might Cause Layout Issues and Should Be Tested"
            }}
        />
    )
};

export const WithSpecialCharacters: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                credentialLabel: "YubiKey 5 NFC - Security Key & Authenticator"
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
                credentialLabel: "Mon iPhone"
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
                credentialLabel: "Mein iPhone"
            }}
        />
    )
};

