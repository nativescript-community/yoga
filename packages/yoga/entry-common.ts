/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import CONSTANTS from "./YGEnums";
import type {
    Yoga$Edge,
    Yoga$FlexWrap,
    Yoga$Align,
    Yoga$FlexDirection,
    Yoga$Direction,
    Yoga$PositionType,
    Yoga$Overflow,
    Yoga$JustifyContent,
    Yoga$Display,
    Yoga$ExperimentalFeature,
} from './YGEnums';

export class Layout {
    constructor(
        public left: number,
        public right: number,
        public top: number,
        public bottom: number,
        public width: number,
        public height: number,
    ) {
    }

    // fromJS(
    //     expose: (
    //         left: number,
    //         right: number,
    //         top: number,
    //         bottom: number,
    //         width: number,
    //         height: number
    //     ) => void
    // ): void {
    //     expose(
    //         this.left,
    //         this.right,
    //         this.top,
    //         this.bottom,
    //         this.width,
    //         this.height,
    //     );
    // }

    toString() {
        return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${
            this.width
        }:${this.height}>`;
    }
}

export class Size {
    static fromJS({ width, height }: { width: number, height: number }): Size {
        return new Size(width, height);
    }

    constructor(public width: number, public height: number) {
    }

    // fromJS(expose: (width: number, height: number) => void): void {
    //     expose(this.width, this.height);
    // }

    toString(): string {
        return `<Size#${this.width}x${this.height}>`;
    }
}

export class Value {
    constructor(public unit: number, public value: number) {
    }

    // fromJS(expose: (width: number, height: number) => void): void {
    //     expose(this.unit, this.value);
    // }

    toString(): string {
        switch (this.unit) {
            case CONSTANTS.UNIT_POINT:
                return String(this.value);
            case CONSTANTS.UNIT_PERCENT:
                return `${this.value}%`;
            case CONSTANTS.UNIT_AUTO:
                return 'auto';
            default: {
                return `${this.value}?`;
            }
        }
    }

    valueOf(): number {
        return this.value;
    }
}

export type Yoga$Config = {
    isExperimentalFeatureEnabled(feature: Yoga$ExperimentalFeature): boolean,
    setExperimentalFeatureEnabled(
        feature: Yoga$ExperimentalFeature,
        enabled: boolean,
    ): void,
    setPointScaleFactor(factor: number): void,
};

export abstract class Yoga$Node {
    abstract calculateLayout(
        width?: number,
        height?: number,
        direction?: Yoga$Direction,
    ): void;
    abstract copyStyle(node: Yoga$Node): void;
    abstract free(): void;
    abstract freeRecursive(): void;
    abstract getAlignContent(): Yoga$Align;
    abstract getAlignItems(): Yoga$Align;
    abstract getAlignSelf(): Yoga$Align;
    abstract getAspectRatio(): number;
    abstract getBorder(edge: Yoga$Edge): number;
    abstract getChild(index: number): Yoga$Node;
    abstract getChildCount(): number;
    abstract getComputedBorder(edge: Yoga$Edge): number;
    abstract getComputedBottom(): number;
    abstract getComputedHeight(): number;
    abstract getComputedLayout(): Layout;
    abstract getComputedLeft(): number;
    abstract getComputedMargin(edge: Yoga$Edge): number;
    abstract getComputedPadding(edge: Yoga$Edge): number;
    abstract getComputedRight(): number;
    abstract getComputedTop(): number;
    abstract getComputedWidth(): number;
    abstract getDisplay(): Yoga$Display;
    abstract getFlexBasis(): number;
    abstract getFlexDirection(): Yoga$FlexDirection;
    abstract getFlexGrow(): number;
    abstract getFlexShrink(): number;
    abstract getFlexWrap(): Yoga$FlexWrap;
    abstract getHeight(): Value;
    abstract getJustifyContent(): Yoga$JustifyContent;
    abstract getMargin(edge: Yoga$Edge): Value;
    abstract getMaxHeight(): Value;
    abstract getMaxWidth(): Value;
    abstract getMinHeight(): Value;
    abstract getMinWidth(): Value;
    abstract getOverflow(): Yoga$Overflow;
    abstract getPadding(edge: Yoga$Edge): Value;
    abstract getParent(): Yoga$Node|undefined;
    abstract getPosition(edge: Yoga$Edge): Value;
    abstract getPositionType(): Yoga$PositionType;
    abstract getWidth(): Value;
    abstract insertChild(child: Yoga$Node, index: number): void;
    abstract isDirty(): boolean;
    abstract markDirty(): void;
    abstract removeChild(child: Yoga$Node): void;
    abstract reset(): void;
    abstract setAlignContent(alignContent: Yoga$Align): void;
    abstract setAlignItems(alignItems: Yoga$Align): void;
    abstract setAlignSelf(alignSelf: Yoga$Align): void;
    abstract setAspectRatio(aspectRatio: number): void;
    abstract setBorder(edge: Yoga$Edge, borderWidth: number): void;
    abstract setDisplay(display: Yoga$Display): void;
    abstract setFlex(flex: number): void;
    abstract setFlexBasis(flexBasis: number | string): void;
    abstract setFlexBasisPercent(flexBasis: number): void;
    abstract setFlexDirection(flexDirection: Yoga$FlexDirection): void;
    abstract setFlexGrow(flexGrow: number): void;
    abstract setFlexShrink(flexShrink: number): void;
    abstract setFlexWrap(flexWrap: Yoga$FlexWrap): void;
    abstract setHeight(height: number | string): void;
    abstract setHeightAuto(): void;
    abstract setHeightPercent(height: number): void;
    abstract setJustifyContent(justifyContent: Yoga$JustifyContent): void;
    abstract setMargin(edge: Yoga$Edge, margin: number): void;
    abstract setMarginAuto(edge: Yoga$Edge): void;
    abstract setMarginPercent(edge: Yoga$Edge, margin: number): void;
    abstract setMaxHeight(maxHeight: number | string): void;
    abstract setMaxHeightPercent(maxHeight: number): void;
    abstract setMaxWidth(maxWidth: number | string): void;
    abstract setMaxWidthPercent(maxWidth: number): void;
    abstract setMeasureFunc(measureFunc: Function|undefined): void;
    abstract setMinHeight(minHeight: number | string): void;
    abstract setMinHeightPercent(minHeight: number): void;
    abstract setMinWidth(minWidth: number | string): void;
    abstract setMinWidthPercent(minWidth: number): void;
    abstract setOverflow(overflow: Yoga$Overflow): void;
    abstract setPadding(edge: Yoga$Edge, padding: number | string): void;
    abstract setPaddingPercent(edge: Yoga$Edge, padding: number): void;
    abstract setPosition(edge: Yoga$Edge, position: number | string): void;
    abstract setPositionPercent(edge: Yoga$Edge, position: number): void;
    abstract setPositionType(positionType: Yoga$PositionType): void;
    abstract setWidth(width: number | string): void;
    abstract setWidthAuto(): void;
    abstract setWidthPercent(width: number): void;
    abstract unsetMeasureFun(): void;
};

export default {
    // Config,
    // Node,
    Layout,
    Size,
    Value,
    ...CONSTANTS,
    /** 
     * In this commit, getInstanceCount was removed from the implementation yet accidentally left in the typings.
     * @see https://github.com/facebook/yoga/commit/adff8d96dd8c0264202c34672c6dee8c0925445c#diff-c925400af6d5dc4ea64acb5bb45e54b953850abdb977708281f0f0fbff9a15a5
     */
    // getInstanceCount(): number,
};

// type TypeofConstants = typeof CONSTANTS;
// interface Yoga extends TypeofConstants {
//     Layout: Layout,
//     Size: Size,
//     Value: Value,
//     /** 
//      * In this commit, getInstanceCount was removed from the implementation yet accidentally left in the typings.
//      * @see https://github.com/facebook/yoga/commit/adff8d96dd8c0264202c34672c6dee8c0925445c#diff-c925400af6d5dc4ea64acb5bb45e54b953850abdb977708281f0f0fbff9a15a5
//      */
//     // getInstanceCount(): number,
// }

// const x = (bind: any, lib: any): Yoga => {
//     function patch(prototype: any, name: string, fn: (...args: any[]) => any): void {
//         const original: (...args: any[]) => any = prototype[name];

//         prototype[name] = function(...args: any[]): any {
//             return fn.call(this, original, ...args);
//         };
//     }

//     for (let fnName of [
//         'setPosition',
//         'setMargin',
//         'setFlexBasis',
//         'setWidth',
//         'setHeight',
//         'setMinWidth',
//         'setMinHeight',
//         'setMaxWidth',
//         'setMaxHeight',
//         'setPadding',
//     ]) {
//         const methods = {
//             [CONSTANTS.UNIT_POINT]: lib.Node.prototype[fnName],
//             [CONSTANTS.UNIT_PERCENT]: lib.Node.prototype[`${fnName}Percent`],
//             [CONSTANTS.UNIT_AUTO]: lib.Node.prototype[`${fnName}Auto`],
//         };

//         patch(lib.Node.prototype, fnName, function(original: any, ...args: any[]) {
//             // We patch all these functions to add support for the following calls:
//             // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

//             const value: any = args.pop();
//             let unit: number, asNumber: number|undefined;

//             if (value === 'auto') {
//                 unit = CONSTANTS.UNIT_AUTO;
//                 asNumber = undefined;
//             } else if (value instanceof Value) {
//                 unit = value.unit;
//                 asNumber = value.valueOf();
//             } else {
//                 unit =
//                     typeof value === 'string' && value.endsWith('%')
//                         ? CONSTANTS.UNIT_PERCENT
//                         : CONSTANTS.UNIT_POINT;
//                 asNumber = parseFloat(value);
//                 if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
//                     throw new Error(`Invalid value ${value} for ${fnName}`);
//                 }
//             }

//             if (!methods[unit])
//                 throw new Error(
//                     `Failed to execute "${fnName}": Unsupported unit '${value}'`,
//                 );

//             if (asNumber !== undefined) {
//                 return methods[unit].call(this, ...args, asNumber);
//             } else {
//                 return methods[unit].call(this, ...args);
//             }
//         });
//     }

//     patch(lib.Config.prototype, 'free', function() {
//         // Since we handle the memory allocation ourselves (via lib.Config.create),
//         // we also need to handle the deallocation
//         lib.Config.destroy(this);
//     });

//     patch(lib.Node, 'create', function(_, config) {
//         // We decide the constructor we want to call depending on the parameters
//         return config
//             ? lib.Node.createWithConfig(config)
//             : lib.Node.createDefault();
//     });

//     patch(lib.Node.prototype, 'free', function() {
//         // Since we handle the memory allocation ourselves (via lib.Node.create),
//         // we also need to handle the deallocation
//         lib.Node.destroy(this);
//     });

//     patch(lib.Node.prototype, 'freeRecursive', function() {
//         for (let t = 0, T = this.getChildCount(); t < T; ++t) {
//             this.getChild(0).freeRecursive();
//         }
//         this.free();
//     });

//     patch(lib.Node.prototype, 'setMeasureFunc', function(original, measureFunc) {
//         // This patch is just a convenience patch, since it helps write more
//         // idiomatic source code (such as .setMeasureFunc(null))
//         // We also automatically convert the return value of the measureFunc
//         // to a Size object, so that we can return anything that has .width and
//         // .height properties
//         if (measureFunc) {
//             return original.call(this, (...args: any[]) =>
//                 Size.fromJS(measureFunc(...args)),
//             );
//         } else {
//             return this.unsetMeasureFunc();
//         }
//     });

//     patch(lib.Node.prototype, 'calculateLayout', function(
//         original,
//         width = NaN,
//         height = NaN,
//         direction = CONSTANTS.DIRECTION_LTR,
//     ) {
//         // Just a small patch to add support for the function default parameters
//         return original.call(this, width, height, direction);
//     });

//     return {
//         Config: lib.Config,
//         Node: lib.Node,
//         Layout: bind('Layout', Layout),
//         Size: bind('Size', Size),
//         Value: bind('Value', Value),
//         ...CONSTANTS,
//     };
// };