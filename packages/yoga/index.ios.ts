/// <reference path="./typings/objc!yoga.d.ts" />
/// <reference path="./typings/objc!YogaKit.d.ts" />

import { Yoga$Node, Value, Layout, Size } from './entry-common';
import type { Yoga$Direction, Yoga$Align, Yoga$Edge, Yoga$Display, Yoga$FlexDirection, Yoga$JustifyContent, Yoga$Unit } from './YGEnums';
import CONSTANTS from './YGEnums';

class YogaNode extends Yoga$Node {
    /*
     * There is a globalConfig that is auto-initialised by the Obj-C runtime, so we don't need do anything with it ourselves.
     * @see https://stackoverflow.com/questions/13326435/nsobject-load-and-initialize-what-do-they-do
     */

    /**
     * Provisional solution for getting a reference to the YogaNode instance that owns the YGLayout native object.
     * I'm still trying to understand the end-to-end picture for the memory management lifecycle.
     */
    private static readonly nativeToOwners = new WeakMap<YGLayout, YogaNode>();
    private static readonly notExposedMsg: string = "Method not implemented, as the Yoga Obj-C library does not implement it.";
    public readonly native: YGLayout = YGLayout.alloc().init();

    constructor(){
        super();

        YogaNode.nativeToOwners.set(this.native, this);
    }

    calculateLayout(width?: number, height?: number, direction?: Yoga$Direction): void {
        YGNodeCalculateLayout(this.native as any, width, height, direction);
    }
    copyStyle(srcNode: YogaNode): void {
        YGNodeCopyStyle(this.native as any, srcNode.native as any);
    }
    free(): void {
        YGNodeFree(this.native as any);
    }
    freeRecursive(): void {
        YGNodeFreeRecursive(this.native as any);
    }
    getAlignContent(): Yoga$Align {
        return this.native.alignContent;
    }
    getAlignItems(): Yoga$Align {
        return this.native.alignItems;
    }
    getAlignSelf(): Yoga$Align {
        return this.native.alignSelf;
    }
    getAspectRatio(): number {
        return this.native.aspectRatio;
    }
    getBorder(edge: Yoga$Edge): number {
        return YGNodeStyleGetBorder(this.native as any, edge);
    }
    getChild(index: number): YogaNode|undefined|null {
        const nativeChild: YGLayout|undefined|null = YGNodeGetChild(this.native as any, index) as unknown as YGLayout|undefined|null;
        if(!nativeChild){
            return nativeChild as undefined|null;
        }
        return YogaNode.nativeToOwners.get(nativeChild);
    }
    getChildCount(): number {
        return YGNodeGetChildCount(this.native as any);
    }
    getComputedBorder(edge: Yoga$Edge): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedBottom(): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedHeight(): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedLayout(): Layout {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedLeft(): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedMargin(edge: Yoga$Edge): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedPadding(edge: Yoga$Edge): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedRight(): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedTop(): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedWidth(): number {
        throw new Error(YogaNode.notExposedMsg);
    }
    getDisplay(): Yoga$Display {
        return this.native.display;
    }
    getFlexBasis(): number {
        return this.native.flexBasis.value;
    }
    getFlexDirection(): Yoga$FlexDirection {
        return this.native.flexDirection;
    }
    getFlexGrow(): number {
        return this.native.flexGrow;
    }
    getFlexShrink(): number {
        return this.native.flexShrink;
    }
    getFlexWrap(): Yoga$Direction {
        return this.native.flexWrap;
    }
    getHeight(): Value {
        const height = this.native.height;
        return new Value(height.unit, height.value);
    }
    getJustifyContent(): Yoga$JustifyContent {
        return this.native.justifyContent;
    }
    getMargin(edge: Yoga$Edge): Value {
        const value = YGNodeStyleGetMargin(this.native as any, edge);
        return new Value(value.unit, value.value);
    }
    getMaxHeight(): Value {
        const value = this.native.maxHeight;
        return new Value(value.unit, value.value);
    }
    getMaxWidth(): Value {
        const value = this.native.maxWidth;
        return new Value(value.unit, value.value);
    }
    getMinHeight(): Value {
        const value = this.native.minHeight;
        return new Value(value.unit, value.value);
    }
    getMinWidth(): Value {
        const value = this.native.minWidth;
        return new Value(value.unit, value.value);
    }
    getOverflow(): Yoga$Direction {
        return YGNodeStyleGetOverflow(this.native as any);
    }
    getPadding(edge: Yoga$Edge): Value {
        const value = YGNodeStyleGetPadding(this.native as any, edge);
        return new Value(value.unit, value.value);
    }
    getParent(): YogaNode|undefined|null {
        const nativeParent: YGLayout|undefined|null = YGNodeGetParent(this.native as any) as unknown as YGLayout|undefined|null;
        if(!nativeParent){
            return nativeParent as undefined|null;
        }
        return YogaNode.nativeToOwners.get(nativeParent);
    }
    getPosition(edge: Yoga$Edge): Value {
        const value: YGValue = YGNodeStyleGetPosition(this.native as any, edge);
        return new Value(value.unit, value.value);
    }
    getPositionType(): Yoga$Display {
        return this.native.position;
    }
    getWidth(): Value {
        const value: YGValue = this.native.width;
        return new Value(value.unit, value.value);
    }
    insertChild(child: YogaNode, index: number): void {
        YGNodeInsertChild(this.native as any, child.native as any, index);
    }
    isDirty(): boolean {
        return YGNodeIsDirty(this.native as any);
    }
    markDirty(): void {
        YGNodeMarkDirty(this.native as any);
    }
    removeChild(child: YogaNode): void {
        YGNodeRemoveChild(this.native as any, child.native as any);
    }
    reset(): void {
        YGNodeReset(this.native as any);
    }
    setAlignContent(alignContent: Yoga$Align): void {
        YGNodeStyleSetAlignContent(this.native as any, alignContent);
    }
    setAlignItems(alignItems: Yoga$Align): void {
        YGNodeStyleSetAlignItems(this.native as any, alignItems);
    }
    setAlignSelf(alignSelf: Yoga$Align): void {
        YGNodeStyleSetAlignSelf(this.native as any, alignSelf);
    }
    setAspectRatio(aspectRatio: number): void {
        YGNodeStyleSetAspectRatio(this.native as any, aspectRatio);
    }
    setBorder(edge: Yoga$Edge, borderWidth: number): void {
        YGNodeStyleSetBorder(this.native as any, edge, borderWidth);
    }
    setDisplay(display: Yoga$Display): void {
        YGNodeStyleSetDisplay(this.native as any, display);
    }
    setFlex(flex: number): void {
        YGNodeStyleSetFlex(this.native as any, flex);
    }
    setFlexBasis(flexBasis: string | number): void {
        const value: Value = this.parseValue(flexBasis);
        switch(value.unit){
            case CONSTANTS.UNIT_AUTO:
                YGNodeStyleSetFlexBasisAuto(this.native as any);
                break;
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetFlexBasisPercent(this.native as any, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetFlexBasis(this.native as any, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setFlexBasis, ${value.unit}.`);
        }
    }
    setFlexBasisPercent(flexBasis: number): void {
        YGNodeStyleSetFlexBasisPercent(this.native as any, flexBasis);
    }
    setFlexDirection(flexDirection: Yoga$FlexDirection): void {
        YGNodeStyleSetFlexDirection(this.native as any, flexDirection);
    }
    setFlexGrow(flexGrow: number): void {
        YGNodeStyleSetFlexGrow(this.native as any, flexGrow);
    }
    setFlexShrink(flexShrink: number): void {
        YGNodeStyleSetFlexShrink(this.native as any, flexShrink);
    }
    setFlexWrap(flexWrap: Yoga$Direction): void {
        YGNodeStyleSetFlexWrap(this.native as any, flexWrap);
    }
    setHeight(height: string | number): void {
        const value: Value = this.parseValue(height);
        switch(value.unit){
            case CONSTANTS.UNIT_AUTO:
                YGNodeStyleSetHeightAuto(this.native as any);
                break;
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetHeightPercent(this.native as any, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetHeight(this.native as any, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setHeight, ${value.unit}.`);
        }
    }
    setHeightAuto(): void {
        YGNodeStyleSetHeightAuto(this.native as any);
    }
    setHeightPercent(height: number): void {
        YGNodeStyleSetHeightPercent(this.native as any, height);
    }
    setJustifyContent(justifyContent: Yoga$JustifyContent): void {
        YGNodeStyleSetJustifyContent(this.native as any, justifyContent);
    }
    setMargin(edge: Yoga$Edge, margin: number): void {
        YGNodeStyleSetMargin(this.native as any, edge, margin);
    }
    setMarginAuto(edge: Yoga$Edge): void {
        YGNodeStyleSetMarginAuto(this.native as any, edge);
    }
    setMarginPercent(edge: Yoga$Edge, margin: number): void {
        YGNodeStyleSetMarginPercent(this.native as any, edge, margin);
    }
    setMaxHeight(maxHeight: string | number): void {
        const value: Value = this.parseValue(maxHeight);
        switch(value.unit){
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetMaxHeightPercent(this.native as any, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetMaxHeight(this.native as any, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setMaxHeight, ${value.unit}.`);
        }
    }
    setMaxHeightPercent(maxHeight: number): void {
        YGNodeStyleSetMaxHeightPercent(this.native as any, maxHeight);
    }
    setMaxWidth(maxWidth: string | number): void {
        const value: Value = this.parseValue(maxWidth);
        switch(value.unit){
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetMaxWidthPercent(this.native as any, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetMaxWidth(this.native as any, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setMaxWidth, ${value.unit}.`);
        }
    }
    setMaxWidthPercent(maxWidth: number): void {
        YGNodeStyleSetMaxWidthPercent(this.native as any, maxWidth);
    }
    setMeasureFunc(measureFunc: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>, p2: number, p3: YGMeasureMode, p4: number, p5: YGMeasureMode) => YGSize>): void {
        YGNodeSetMeasureFunc(this.native as any, measureFunc);
    }
    setMinHeight(minHeight: string | number): void {
        const value: Value = this.parseValue(minHeight);
        switch(value.unit){
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetMinHeightPercent(this.native as any, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetMinHeight(this.native as any, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setMinHeight, ${value.unit}.`);
        }
    }
    setMinHeightPercent(minHeight: number): void {
        YGNodeStyleSetMinHeightPercent(this.native as any, minHeight);
    }
    setMinWidth(minWidth: string | number): void {
        const value: Value = this.parseValue(minWidth);
        switch(value.unit){
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetMinWidthPercent(this.native as any, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetMinWidth(this.native as any, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setMinWidth, ${value.unit}.`);
        }
    }
    setMinWidthPercent(minWidth: number): void {
        YGNodeStyleSetMinWidthPercent(this.native as any, minWidth);
    }
    setOverflow(overflow: Yoga$Direction): void {
        YGNodeStyleSetOverflow(this.native as any, overflow);
    }
    setPadding(edge: Yoga$Edge, padding: string | number): void {
        const value: Value = this.parseValue(padding);
        switch(value.unit){
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetPaddingPercent(this.native as any, edge, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetPadding(this.native as any, edge, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setPadding, ${value.unit}.`);
        }
    }
    setPaddingPercent(edge: Yoga$Edge, padding: number): void {
        YGNodeStyleSetPaddingPercent(this.native as any, edge, padding);
    }
    setPosition(edge: Yoga$Edge, position: string | number): void {
        if(position === "absolute"){
            YGNodeStyleSetPositionType(this.native as any, YGPositionType.Absolute);
            return;
        }

        if(position === "relative"){
            YGNodeStyleSetPositionType(this.native as any, YGPositionType.Relative);
            return;
        }

        const value: Value = this.parseValue(position);
        switch(value.unit){
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetPositionPercent(this.native as any, edge, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetPosition(this.native as any, edge, value.value);
                break;
            default:
                // It's impossible to get UNIT_UNDEFINED because parseValue would have thrown by then.
                throw new Error(`Invalid unit for setPosition, ${value.unit}.`);
        }
    }
    setPositionPercent(edge: Yoga$Edge, position: number): void {
        YGNodeStyleSetPositionPercent(this.native as any, edge, position);
    }
    setPositionType(positionType: Yoga$Display): void {
        YGNodeStyleSetPositionType(this.native as any, positionType);
    }
    setWidth(width: string | number): void {
        const value: Value = this.parseValue(width);
        switch(value.unit){
            case CONSTANTS.UNIT_AUTO:
                YGNodeStyleSetWidthAuto(this.native as any);
                break;
            case CONSTANTS.UNIT_PERCENT:
                YGNodeStyleSetWidthPercent(this.native as any, value.value);
                break;
            case CONSTANTS.UNIT_POINT:
                YGNodeStyleSetWidth(this.native as any, value.value);
                break;
            default:
                throw new Error(`Invalid unit for setWidth, ${value.unit}.`);
        }
    }
    setWidthAuto(): void {
        YGNodeStyleSetWidthAuto(this.native as any);
    }
    setWidthPercent(width: number): void {
        YGNodeStyleSetWidthPercent(this.native as any, width);
    }
    unsetMeasureFun(): void {
        YGNodeSetMeasureFunc(this.native as any, null);
    }
    private parseValue(value: string|number|Value): Value {
        let unit: Yoga$Unit; 
        let asNumber: number|undefined;

        if (value === "auto") {
            unit = CONSTANTS.UNIT_AUTO;
            asNumber = undefined;
        } else if (value instanceof Value) {
            unit = value.unit;
            asNumber = value.valueOf();
        } else {
            unit =
                typeof value === "string" && value.endsWith("%")
                    ? CONSTANTS.UNIT_PERCENT
                    : CONSTANTS.UNIT_POINT;
            asNumber = parseFloat(value as string);
            if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
                throw new Error(`Invalid value ${value}.`);
            }
        }

        return new Value(unit, asNumber);
    }
}

export type {
    Yoga$JustifyContent,
    Yoga$Align,
    Yoga$FlexDirection,
    Yoga$Direction,
    Yoga$FlexWrap,
    Yoga$Edge,
    Yoga$Display,
    Yoga$Unit,
    Yoga$Overflow,
    Yoga$PositionType,
    Yoga$ExperimentalFeature,
} from './YGEnums';
  
export type {Yoga$Node, Yoga$Config} from './entry-common';

/*
 * Based on entry-node.js and entry-common.js
 * @see https://github.com/facebook/yoga/blob/master/javascript/sources/entry-node.js
 * @see https://github.com/facebook/yoga/blob/master/javascript/sources/entry-common.js
 */
export default {
    // Config,
    Node: YogaNode,
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