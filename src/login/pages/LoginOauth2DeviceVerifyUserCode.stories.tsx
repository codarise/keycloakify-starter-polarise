import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-oauth2-device-verify-user-code.ftl" });

const meta = {
    title: "login/login-oauth2-device-verify-user-code.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithFieldError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "device_user_code",
                    get: (fieldName: string) => (fieldName === "device_user_code" ? "Invalid user code. Please try again." : undefined)
                }
            }}
        />
    )
};

export const WithEmptyFieldError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "device_user_code",
                    get: (fieldName: string) => (fieldName === "device_user_code" ? "User code is required." : undefined)
                }
            }}
        />
    )
};

export const WithExpiredCodeError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "device_user_code",
                    get: (fieldName: string) => (fieldName === "device_user_code" ? "User code has expired. Please request a new one." : undefined)
                }
            }}
        />
    )
};

export const WithInvalidFormatError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "device_user_code",
                    get: (fieldName: string) => (fieldName === "device_user_code" ? "User code format is invalid. Please check and try again." : undefined)
                }
            }}
        />
    )
};

export const WithGlobalError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "global",
                    get: (fieldName: string) => (fieldName === "global" ? "An error occurred while verifying the user code. Please try again." : undefined)
                }
            }}
        />
    )
};

export const WithMultipleErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => ["device_user_code", "global"].includes(fieldName),
                    get: (fieldName: string) => {
                        if (fieldName === "device_user_code") return "Invalid user code.";
                        if (fieldName === "global") return "Verification failed.";
                    }
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
                }
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
                }
            }}
        />
    )
};

export const WithJapaneseLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ja"
                }
            }}
        />
    )
};

export const WithChineseLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "zh_CN"
                }
            }}
        />
    )
};

export const WithArabicLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ar"
                }
            }}
        />
    )
};

export const WithRussianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ru"
                }
            }}
        />
    )
};

export const WithPortugueseLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "pt_BR"
                }
            }}
        />
    )
};

export const WithItalianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "it"
                }
            }}
        />
    )
};

export const WithDutchLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "nl"
                }
            }}
        />
    )
};

export const WithSwedishLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "sv"
                }
            }}
        />
    )
};

export const WithNorwegianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "no"
                }
            }}
        />
    )
};

export const WithDanishLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "da"
                }
            }}
        />
    )
};

export const WithFinnishLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fi"
                }
            }}
        />
    )
};

export const WithPolishLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "pl"
                }
            }}
        />
    )
};

export const WithCzechLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "cs"
                }
            }}
        />
    )
};

export const WithHungarianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "hu"
                }
            }}
        />
    )
};

export const WithRomanianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ro"
                }
            }}
        />
    )
};

export const WithBulgarianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "bg"
                }
            }}
        />
    )
};

export const WithCroatianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "hr"
                }
            }}
        />
    )
};

export const WithSlovakLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "sk"
                }
            }}
        />
    )
};

export const WithSlovenianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "sl"
                }
            }}
        />
    )
};

export const WithLithuanianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "lt"
                }
            }}
        />
    )
};

export const WithLatvianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "lv"
                }
            }}
        />
    )
};

export const WithEstonianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "et"
                }
            }}
        />
    )
};

export const WithGreekLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "el"
                }
            }}
        />
    )
};

export const WithTurkishLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "tr"
                }
            }}
        />
    )
};

export const WithHebrewLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "he"
                }
            }}
        />
    )
};

export const WithThaiLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "th"
                }
            }}
        />
    )
};

export const WithKoreanLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ko"
                }
            }}
        />
    )
};

export const WithVietnameseLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "vi"
                }
            }}
        />
    )
};

export const WithIndonesianLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "id"
                }
            }}
        />
    )
};

export const WithMalayLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ms"
                }
            }}
        />
    )
};

export const WithFilipinoLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "tl"
                }
            }}
        />
    )
};
