/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path "account/components/page/Page.tsx"
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260200.0.0.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import {
    PageSection,
    Text,
    TextContent,
    Title
} from "../../../shared/@patternfly/react-core";
import { PropsWithChildren } from "react";
import { getIsDark } from "../../../components/isDark";

type PageProps = {
    title: string;
    description: string;
};


export const Page = ({ title, description, children }: PropsWithChildren<PageProps>) => {
    const isDark = getIsDark();
    return (
        <>
            <PageSection variant={isDark ? "dark" : "light"}>
                <TextContent>
                    <Title headingLevel="h1" data-testid="page-heading">
                        {title}
                    </Title>
                    <Text component="p">{description}</Text>
                </TextContent>
            </PageSection>
            <PageSection variant={isDark ? "dark" : "light"}>{children}</PageSection>
        </>
    );
};
