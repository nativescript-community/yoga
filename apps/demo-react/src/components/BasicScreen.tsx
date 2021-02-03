import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import type { ItemEventData } from "@nativescript/core";
import { ListView, StyleSheet } from "react-nativescript";
import { Dialogs } from "@nativescript/core";
import { default as Yoga } from "@nativescript-community/yoga";

const YogaNode = Yoga.Node;

type ContactsScreenProps = {
    route: RouteProp<MainStackParamList, "basic">,
    navigation: FrameNavigationProp<MainStackParamList, "basic">,
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
        label: `Basic tests.`,
        callback: () => {
            try {
                const root = new YogaNode();
                console.log(`Successfully constructed a YogaNode.`, root);
                console.log(`The native instance:`, root.native);

                console.log(`root.getAlignContent():`, root.getAlignContent().toString());

                console.log(`interop.sizeof(root.native):`, interop.sizeof(root.native));

                const keys = [];
                for(let key in root.native){
                    keys.push(key);
                }
                const sortedKeys = keys.sort();

                // sortedKeys.forEach(k => console.log(k));

                // console.log(`root.native.self._node`, root.native.self._node);

                // //@ts-ignore
                // YGNodeFree(root.native.node);
                // console.log(`Object.keys(root.native):`, JSON.stringify(Object.keys(root.native)));

                // root.setWidth(100);
                // console.log(`1`);
                // root.setHeight(100);
                // console.log(`2`);

                // const root_child0 = new YogaNode();
                // console.log(`3`);
                // root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
                // console.log(`4`);
                // root_child0.setPosition(Yoga.EDGE_START, 10);
                // console.log(`5`);
                // root_child0.setPosition(Yoga.EDGE_TOP, 10);
                // console.log(`6`);
                // root_child0.setWidth(10);
                // console.log(`7`);
                // root_child0.setHeight(10);
                // console.log(`8`);
                // root.insertChild(root_child0, 0);
                // console.log(`8`);
                // // root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);
                // root.calculateLayout(void 0, void 0, Yoga.DIRECTION_LTR);
                // console.log(`9`);


                // const alignContent = root.getAlignContent();
                // console.log(`align-content: ${alignContent}`);
                
            } catch(error){
                console.error(`Failed to manipulate YogaNode.`, error);
            }
        },
    },
];

const cellFactory = (item: MyItem) => {
    return <label style={styles.label}>{item.label}</label>;
};

export function BasicScreen({ navigation }: ContactsScreenProps) {
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
