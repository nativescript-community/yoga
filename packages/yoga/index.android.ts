/// <reference path="./typings/java!android-28-yoga-1.16.1.d.ts" />

import { Yoga$Node, Value, Layout, Size } from './entry-common';
import type { Yoga$Direction, Yoga$Align, Yoga$Edge, Yoga$Display, Yoga$FlexDirection, Yoga$JustifyContent, Yoga$Unit } from './YGEnums';
import CONSTANTS from './YGEnums';

export class YogaNode extends Yoga$Node {
    // TODO
    public readonly native: any = null;

    calculateLayout(width?: number, height?: number, direction?: Yoga$Direction): void {
        throw new Error('Method not implemented.');
    }
    copyStyle(node: Yoga$Node): void {
        throw new Error('Method not implemented.');
    }
    free(): void {
        throw new Error('Method not implemented.');
    }
    freeRecursive(): void {
        throw new Error('Method not implemented.');
    }
    getAlignContent(): Yoga$Align {
        throw new Error('Method not implemented.');
    }
    getAlignItems(): Yoga$Align {
        throw new Error('Method not implemented.');
    }
    getAlignSelf(): Yoga$Align {
        throw new Error('Method not implemented.');
    }
    getAspectRatio(): number {
        throw new Error('Method not implemented.');
    }
    getBorder(edge: Yoga$Edge): number {
        throw new Error('Method not implemented.');
    }
    getChild(index: number): Yoga$Node {
        throw new Error('Method not implemented.');
    }
    getChildCount(): number {
        throw new Error('Method not implemented.');
    }
    getComputedBorder(edge: Yoga$Edge): number {
        throw new Error('Method not implemented.');
    }
    getComputedBottom(): number {
        throw new Error('Method not implemented.');
    }
    getComputedHeight(): number {
        throw new Error('Method not implemented.');
    }
    getComputedLayout(): Layout {
        throw new Error('Method not implemented.');
    }
    getComputedLeft(): number {
        throw new Error('Method not implemented.');
    }
    getComputedMargin(edge: Yoga$Edge): number {
        throw new Error('Method not implemented.');
    }
    getComputedPadding(edge: Yoga$Edge): number {
        throw new Error('Method not implemented.');
    }
    getComputedRight(): number {
        throw new Error('Method not implemented.');
    }
    getComputedTop(): number {
        throw new Error('Method not implemented.');
    }
    getComputedWidth(): number {
        throw new Error('Method not implemented.');
    }
    getDisplay(): Yoga$Display {
        throw new Error('Method not implemented.');
    }
    getFlexBasis(): number {
        throw new Error('Method not implemented.');
    }
    getFlexDirection(): Yoga$FlexDirection {
        throw new Error('Method not implemented.');
    }
    getFlexGrow(): number {
        throw new Error('Method not implemented.');
    }
    getFlexShrink(): number {
        throw new Error('Method not implemented.');
    }
    getFlexWrap(): Yoga$Direction {
        throw new Error('Method not implemented.');
    }
    getHeight(): Value {
        throw new Error('Method not implemented.');
    }
    getJustifyContent(): Yoga$JustifyContent {
        throw new Error('Method not implemented.');
    }
    getMargin(edge: Yoga$Edge): Value {
        throw new Error('Method not implemented.');
    }
    getMaxHeight(): Value {
        throw new Error('Method not implemented.');
    }
    getMaxWidth(): Value {
        throw new Error('Method not implemented.');
    }
    getMinHeight(): Value {
        throw new Error('Method not implemented.');
    }
    getMinWidth(): Value {
        throw new Error('Method not implemented.');
    }
    getOverflow(): Yoga$Direction {
        throw new Error('Method not implemented.');
    }
    getPadding(edge: Yoga$Edge): Value {
        throw new Error('Method not implemented.');
    }
    getParent(): Yoga$Node {
        throw new Error('Method not implemented.');
    }
    getPosition(edge: Yoga$Edge): Value {
        throw new Error('Method not implemented.');
    }
    getPositionType(): Yoga$Display {
        throw new Error('Method not implemented.');
    }
    getWidth(): Value {
        throw new Error('Method not implemented.');
    }
    insertChild(child: Yoga$Node, index: number): void {
        throw new Error('Method not implemented.');
    }
    isDirty(): boolean {
        throw new Error('Method not implemented.');
    }
    markDirty(): void {
        throw new Error('Method not implemented.');
    }
    removeChild(child: Yoga$Node): void {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
    setAlignContent(alignContent: Yoga$Align): void {
        throw new Error('Method not implemented.');
    }
    setAlignItems(alignItems: Yoga$Align): void {
        throw new Error('Method not implemented.');
    }
    setAlignSelf(alignSelf: Yoga$Align): void {
        throw new Error('Method not implemented.');
    }
    setAspectRatio(aspectRatio: number): void {
        throw new Error('Method not implemented.');
    }
    setBorder(edge: Yoga$Edge, borderWidth: number): void {
        throw new Error('Method not implemented.');
    }
    setDisplay(display: Yoga$Display): void {
        throw new Error('Method not implemented.');
    }
    setFlex(flex: number): void {
        throw new Error('Method not implemented.');
    }
    setFlexBasis(flexBasis: string | number): void {
        throw new Error('Method not implemented.');
    }
    setFlexBasisPercent(flexBasis: number): void {
        throw new Error('Method not implemented.');
    }
    setFlexDirection(flexDirection: Yoga$FlexDirection): void {
        throw new Error('Method not implemented.');
    }
    setFlexGrow(flexGrow: number): void {
        throw new Error('Method not implemented.');
    }
    setFlexShrink(flexShrink: number): void {
        throw new Error('Method not implemented.');
    }
    setFlexWrap(flexWrap: Yoga$Direction): void {
        throw new Error('Method not implemented.');
    }
    setHeight(height: string | number): void {
        throw new Error('Method not implemented.');
    }
    setHeightAuto(): void {
        throw new Error('Method not implemented.');
    }
    setHeightPercent(height: number): void {
        throw new Error('Method not implemented.');
    }
    setJustifyContent(justifyContent: Yoga$JustifyContent): void {
        throw new Error('Method not implemented.');
    }
    setMargin(edge: Yoga$Edge, margin: number): void {
        throw new Error('Method not implemented.');
    }
    setMarginAuto(edge: Yoga$Edge): void {
        throw new Error('Method not implemented.');
    }
    setMarginPercent(edge: Yoga$Edge, margin: number): void {
        throw new Error('Method not implemented.');
    }
    setMaxHeight(maxHeight: string | number): void {
        throw new Error('Method not implemented.');
    }
    setMaxHeightPercent(maxHeight: number): void {
        throw new Error('Method not implemented.');
    }
    setMaxWidth(maxWidth: string | number): void {
        throw new Error('Method not implemented.');
    }
    setMaxWidthPercent(maxWidth: number): void {
        throw new Error('Method not implemented.');
    }
    setMeasureFunc(measureFunc: Function): void {
        throw new Error('Method not implemented.');
    }
    setMinHeight(minHeight: string | number): void {
        throw new Error('Method not implemented.');
    }
    setMinHeightPercent(minHeight: number): void {
        throw new Error('Method not implemented.');
    }
    setMinWidth(minWidth: string | number): void {
        throw new Error('Method not implemented.');
    }
    setMinWidthPercent(minWidth: number): void {
        throw new Error('Method not implemented.');
    }
    setOverflow(overflow: Yoga$Direction): void {
        throw new Error('Method not implemented.');
    }
    setPadding(edge: Yoga$Edge, padding: string | number): void {
        throw new Error('Method not implemented.');
    }
    setPaddingPercent(edge: Yoga$Edge, padding: number): void {
        throw new Error('Method not implemented.');
    }
    setPosition(edge: Yoga$Edge, position: string | number): void {
        throw new Error('Method not implemented.');
    }
    setPositionPercent(edge: Yoga$Edge, position: number): void {
        throw new Error('Method not implemented.');
    }
    setPositionType(positionType: Yoga$Display): void {
        throw new Error('Method not implemented.');
    }
    setWidth(width: string | number): void {
        throw new Error('Method not implemented.');
    }
    setWidthAuto(): void {
        throw new Error('Method not implemented.');
    }
    setWidthPercent(width: number): void {
        throw new Error('Method not implemented.');
    }
    unsetMeasureFun(): void {
        throw new Error('Method not implemented.');
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