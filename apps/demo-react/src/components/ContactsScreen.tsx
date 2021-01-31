import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import type { ItemEventData } from "@nativescript/core";
import { ListView, StyleSheet } from "react-nativescript";
import { Dialogs } from "@nativescript/core";
import { createStyleSheet } from "../util/createStyleSheet";

type ContactsScreenProps = {
    route: RouteProp<MainStackParamList, "contacts">,
    navigation: FrameNavigationProp<MainStackParamList, "contacts">,
}

interface MyItem {
    label: string,
    callback?: () => void;
}

function errorHandler(error: any): Promise<void> {
    console.error(error);
    Dialogs.alert(`Error: ${error.message || error}`);
    return Promise.resolve();
}

const items: MyItem[] = [
    {
        label: `Placeholder test.`,
        callback: () => {
            Dialogs.alert(`TODO: implement.`);
            // getPermissionsAsync()
            // .then((response: PermissionResponse) => {
            //     const { canAskAgain, expires, granted, status } = response;
            //     Dialogs.alert(`canAskAgain: ${canAskAgain}; expires: ${expires}; granted: ${granted}; status: ${status}`);
            // })
            // .catch(errorHandler);
        },
    },
];

const cellFactory = (item: MyItem) => {
    return <label style={styles.label}>{item.label}</label>;
};

export function Contacts({ navigation }: ContactsScreenProps) {
    const onItemTap = (args: ItemEventData) => {
        const index: number = args.index;
        const item: MyItem = items[index];
        item.callback?.();
    };

    return (
        <ListView
            width={"100%"}
            height={"100%"}
            items={items}
            cellFactory={cellFactory}
            onItemTap={onItemTap}
        />
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 8,
        paddingBottom: 8,
    }
});
