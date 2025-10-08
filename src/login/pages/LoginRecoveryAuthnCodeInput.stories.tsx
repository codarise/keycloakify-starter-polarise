import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-recovery-authn-code-input.ftl" });

const meta = {
    title: "login/login-recovery-authn-code-input.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithCodeNumber1: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 1
                }
            }}
        />
    )
};

export const WithCodeNumber5: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 5
                }
            }}
        />
    )
};

export const WithCodeNumber10: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 10
                }
            }}
        />
    )
};

export const WithInvalidCodeError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 1
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "Invalid recovery code. Please try again." : undefined)
                }
            }}
        />
    )
};

export const WithEmptyCodeError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 2
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "Recovery code is required." : undefined)
                }
            }}
        />
    )
};

export const WithExpiredCodeError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 3
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "Recovery code has expired. Please use a different code." : undefined)
                }
            }}
        />
    )
};

export const WithUsedCodeError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 4
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "This recovery code has already been used." : undefined)
                }
            }}
        />
    )
};

export const WithInvalidFormatError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 6
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "Recovery code format is invalid. Please check and try again." : undefined)
                }
            }}
        />
    )
};

export const WithHtmlErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 7
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "Invalid code. <a href='#'>Request new recovery codes</a> if needed." : undefined)
                }
            }}
        />
    )
};

export const WithLongErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 8
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "This recovery code is invalid or has already been used. Please check the code and try again, or contact support if you continue to have issues." : undefined)
                }
            }}
        />
    )
};

export const WithLastCodeWarning: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                recoveryAuthnCodesInputBean: {
                    codeNumber: 1
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "This is your last recovery code. Please generate new codes after successful login." : undefined)
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
                recoveryAuthnCodesInputBean: {
                    codeNumber: 1
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
                recoveryAuthnCodesInputBean: {
                    codeNumber: 2
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
                },
                recoveryAuthnCodesInputBean: {
                    codeNumber: 3
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
                },
                recoveryAuthnCodesInputBean: {
                    codeNumber: 4
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
                },
                recoveryAuthnCodesInputBean: {
                    codeNumber: 5
                }
            }}
        />
    )
};
