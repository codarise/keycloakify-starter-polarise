import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "idp-review-user-profile.ftl" });

const meta = {
    title: "login/idp-review-user-profile.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithPreFilledData: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: {
                            value: "johndoe"
                        },
                        email: {
                            value: "john.doe@example.com"
                        },
                        firstName: {
                            value: "John"
                        },
                        lastName: {
                            value: "Doe"
                        }
                    }
                }
            }}
        />
    )
};

export const WithEmailAlreadyExists: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: {
                            value: "johndoe"
                        },
                        email: {
                            value: "john.doe@example.com"
                        },
                        firstName: {
                            value: "John"
                        },
                        lastName: {
                            value: "Doe"
                        }
                    }
                },
                messagesPerField: {
                    existsError: (fieldName: string, ...otherFieldNames: string[]) => [fieldName, ...otherFieldNames].includes("email"),
                    get: (fieldName: string) => (fieldName === "email" ? "Email already exists." : undefined)
                }
            }}
        />
    )
};

export const WithFieldErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: {
                            value: ""
                        },
                        email: {
                            value: "invalid-email"
                        },
                        firstName: {
                            value: ""
                        },
                        lastName: {
                            value: ""
                        }
                    }
                },
                messagesPerField: {
                    existsError: (fieldName: string) => ["username", "email", "firstName", "lastName"].includes(fieldName),
                    get: (fieldName: string) => {
                        if (fieldName === "username") return "Username is required.";
                        if (fieldName === "email") return "Invalid email format.";
                        if (fieldName === "firstName") return "First name is required.";
                        if (fieldName === "lastName") return "Last name is required.";
                    }
                }
            }}
        />
    )
};

export const WithCustomAttributes: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: {
                            value: "johndoe"
                        },
                        email: {
                            value: "john.doe@example.com"
                        },
                        firstName: {
                            value: "John"
                        },
                        lastName: {
                            value: "Doe"
                        },
                    }
                }
            }}
        />
    )
};

export const WithPasswordConfirmation: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: {
                            value: "johndoe"
                        },
                        email: {
                            value: "john.doe@example.com"
                        },
                        firstName: {
                            value: "John"
                        },
                        lastName: {
                            value: "Doe"
                        }
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
                profile: {
                    attributesByName: {
                        username: {
                            value: "johndoe",
                            readOnly: true
                        },
                        email: {
                            value: "john.doe@example.com",
                            readOnly: true
                        },
                        firstName: {
                            value: "John",
                            readOnly: false
                        },
                        lastName: {
                            value: "Doe",
                            readOnly: false
                        }
                    }
                }
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
                profile: {
                    attributesByName: {
                        username: undefined,
                        email: {
                            value: "john.doe@example.com"
                        },
                        firstName: {
                            value: "John"
                        },
                        lastName: {
                            value: "Doe"
                        }
                    }
                }
            }}
        />
    )
};

export const WithPasswordPolicies: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: {
                            value: "johndoe"
                        },
                        email: {
                            value: "john.doe@example.com"
                        },
                        firstName: {
                            value: "John"
                        },
                        lastName: {
                            value: "Doe"
                        }
                    }
                },
                passwordPolicies: {
                    length: 8,
                    digits: 1,
                    lowerCase: 1,
                    upperCase: 1,
                    specialChars: 1
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
                profile: {
                    attributesByName: {
                        username: {
                            value: "jeanmartin"
                        },
                        email: {
                            value: "jean.martin@exemple.com"
                        },
                        firstName: {
                            value: "Jean"
                        },
                        lastName: {
                            value: "Martin"
                        }
                    }
                }
            }}
        />
    )
};

export const WithGlobalError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: {
                            value: "johndoe"
                        },
                        email: {
                            value: "john.doe@example.com"
                        },
                        firstName: {
                            value: "John"
                        },
                        lastName: {
                            value: "Doe"
                        }
                    }
                },
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "global",
                    get: (fieldName: string) => (fieldName === "global" ? "An error occurred while processing your request." : undefined)
                }
            }}
        />
    )
};
