/// <reference path="./typings/objc!yoga.d.ts" />
/// <reference path="./typings/objc!YogaKit.d.ts" />

import { Yoga$Node } from './entry-common';
import { Value, Layout, Size } from './entry-common';
import { Yoga$Direction, Yoga$Align, Yoga$Edge, Yoga$Display, Yoga$FlexDirection, Yoga$JustifyContent } from './YGEnums';

export class YogaNode extends Yoga$Node {
    // FIXME: Should this be a weak ref instead? That said, it's not a delegate.
    // Could adorn it with a weak ref to the YogaNode class that owns it, though...
    public readonly native: YGLayout = YGLayout.alloc().init();
    private static readonly notExposedMsg: string = "Method not implemented, as Yoga does not expose it to Obj-C.";

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
    getChild(index: number): YogaNode {
        // FIXME: return a YogaNode rather than a YGNode
        return YGNodeGetChild(this.native as any, index) as any;
    }
    getChildCount(): number {
        return YGNodeGetChildCount(this.native as any);
    }
    getComputedBorder(edge: Yoga$Edge): number {
        // return this.native.computedBorder;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedBottom(): number {
        // return this.native.computedBottom;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedHeight(): number {
        // return this.native.computedHeight;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedLayout(): Layout {
        // return this.native.computedLayout;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedLeft(): number {
        // return this.native.computedLeft;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedMargin(edge: Yoga$Edge): number {
        // return this.native.computedMargin;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedPadding(edge: Yoga$Edge): number {
        // return this.native.computedPadding;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedRight(): number {
        // return this.native.computedRight;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedTop(): number {
        // return this.native.computedTop;
        throw new Error(YogaNode.notExposedMsg);
    }
    getComputedWidth(): number {
        // return this.native.computedWidth;
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
        const value = this.native.margin;
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
        return this.native.overflow;
    }
    getPadding(edge: Yoga$Edge): Value {
        const padding = this.native.padding;
        return new Value(padding.unit, padding.value);
    }
    getParent(): YogaNode {
        // FIXME: return a YogaNode rather than a YGNode
        return YGNodeGetParent(this.native as any) as any;
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
        // FIXME
        YGNodeStyleSetFlexBasis(this.native as any, flexBasis);
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
        YGNodeStyleSetHeight(this.native as any, height);
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
        // FIXME
        YGNodeStyleSetMaxHeight(this.native as any, maxHeight);
    }
    setMaxHeightPercent(maxHeight: number): void {
        YGNodeStyleSetMaxHeightPercent(this.native as any, maxHeight);
    }
    setMaxWidth(maxWidth: string | number): void {
        // FIXME
        YGNodeStyleSetMaxWidth(this.native as any, maxWidth);
    }
    setMaxWidthPercent(maxWidth: number): void {
        YGNodeStyleSetMaxWidthPercent(this.native as any, maxWidth);
    }
    setMeasureFunc(measureFunc: Function): void {
        // YGNodeStyleSetMeasureFunc(this.native as any, measureFunc);
        throw new Error("Not yet implemented");
    }
    setMinHeight(minHeight: string | number): void {
        YGNodeStyleSetMinHeight(this.native as any, minHeight);
    }
    setMinHeightPercent(minHeight: number): void {
        YGNodeStyleSetMinHeightPercent(this.native as any, minHeight);
    }
    setMinWidth(minWidth: string | number): void {
        YGNodeStyleSetMinWidth(this.native as any, minWidth);
    }
    setMinWidthPercent(minWidth: number): void {
        YGNodeStyleSetMinWidthPercent(this.native as any, minWidth);
    }
    setOverflow(overflow: Yoga$Direction): void {
        YGNodeStyleSetOverflow(this.native as any, overflow);
    }
    setPadding(edge: Yoga$Edge, padding: string | number): void {
        // FIXME
        YGNodeStyleSetPadding(this.native as any, edge, padding);
    }
    setPaddingPercent(edge: Yoga$Edge, padding: number): void {
        // FIXME
        YGNodeStyleSetPaddingPercent(this.native as any, edge, padding);
    }
    setPosition(edge: Yoga$Edge, position: string | number): void {
        // FIXME
        YGNodeStyleSetPosition(this.native as any, edge, position);
    }
    setPositionPercent(edge: Yoga$Edge, position: number): void {
        // FIXME
        YGNodeStyleSetPositionPercent(this.native as any, edge, position);
    }
    setPositionType(positionType: Yoga$Display): void {
        YGNodeStyleSetPositionType(this.native as any, positionType);
    }
    setWidth(width: string | number): void {
        // FIXME
        YGNodeStyleSetWidth(this.native as any, width);
    }
    setWidthAuto(): void {
        YGNodeStyleSetWidthAuto(this.native as any);
    }
    setWidthPercent(width: number): void {
        YGNodeStyleSetWidthPercent(this.native as any, width);
    }
    unsetMeasureFun(): void {
        throw new Error('Method not implemented.');
    }
}