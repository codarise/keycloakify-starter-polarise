/**
 * This file has been claimed for ownership from @keycloakify/keycloak-account-ui version 260200.0.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "account/KcPage.tsx" --revert
 */

import { lazy } from "react";
import { KcAccountUiLoader } from "@keycloakify/keycloak-account-ui";
import { KcContext } from "./KcContext";
import "../login/main.css"

const KcAccountUi = lazy(() => import("./KcAccountUi"));

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    return (
        <KcAccountUiLoader kcContext={kcContext} KcAccountUi={KcAccountUi} />
    )
}