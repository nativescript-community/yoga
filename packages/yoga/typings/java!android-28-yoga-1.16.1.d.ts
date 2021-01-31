/// <reference path="android-declarations.d.ts"/>

// See: https://docs.nativescript.org/core-concepts/android-runtime/metadata/generating-typescript-declarations
// Generated for Android API level 28 by:
// 1) adding `testCompileOnly "com.facebook.yoga.android:yoga-layout:1.16.0"` into `/Users/jamie/Documents/git/android-dts-generator/dts-generator/build.gradle`
// 2) running `./gradlew extractAllJars` in the `dts-generator` directory.
// 3) running `java -jar /Users/jamie/Documents/git/android-dts-generator/dts-generator/build/libs/dts-generator.jar -input /usr/local/share/android-sdk/platforms/android-28/android.jar /Users/jamie/Documents/git/android-dts-generator/dts-generator/jar-files/yoga.aar\ \(com.facebook.yoga_yoga_1.16.0\)/classes.jar /Users/jamie/Documents/git/android-dts-generator/dts-generator/jar-files/yoga-layout.aar\ \(com.facebook.yoga.android_yoga-layout_1.16.0\)/classes.jar`
// 4) grabbing `out/android-28.d.ts` and cutting it down to just the `com.facebook.yoga` declarations.

declare module com {
	export module facebook {
		export module yoga {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class LayoutPassReason {
				public static class: java.lang.Class<com.facebook.yoga.LayoutPassReason>;
				public static INITIAL: com.facebook.yoga.LayoutPassReason;
				public static ABS_LAYOUT: com.facebook.yoga.LayoutPassReason;
				public static STRETCH: com.facebook.yoga.LayoutPassReason;
				public static MULTILINE_STRETCH: com.facebook.yoga.LayoutPassReason;
				public static FLEX_LAYOUT: com.facebook.yoga.LayoutPassReason;
				public static MEASURE: com.facebook.yoga.LayoutPassReason;
				public static ABS_MEASURE: com.facebook.yoga.LayoutPassReason;
				public static FLEX_MEASURE: com.facebook.yoga.LayoutPassReason;
				public static values(): native.Array<com.facebook.yoga.LayoutPassReason>;
				public static fromInt(param0: number): com.facebook.yoga.LayoutPassReason;
				public static valueOf(param0: string): com.facebook.yoga.LayoutPassReason;
				public intValue(): number;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaAlign {
				public static class: java.lang.Class<com.facebook.yoga.YogaAlign>;
				public static AUTO: com.facebook.yoga.YogaAlign;
				public static FLEX_START: com.facebook.yoga.YogaAlign;
				public static CENTER: com.facebook.yoga.YogaAlign;
				public static FLEX_END: com.facebook.yoga.YogaAlign;
				public static STRETCH: com.facebook.yoga.YogaAlign;
				public static BASELINE: com.facebook.yoga.YogaAlign;
				public static SPACE_BETWEEN: com.facebook.yoga.YogaAlign;
				public static SPACE_AROUND: com.facebook.yoga.YogaAlign;
				public static valueOf(param0: string): com.facebook.yoga.YogaAlign;
				public intValue(): number;
				public static values(): native.Array<com.facebook.yoga.YogaAlign>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static fromInt(param0: number): com.facebook.yoga.YogaAlign;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaBaselineFunction extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaBaselineFunction>;
				/**
				 * Constructs a new instance of the com.facebook.yoga.YogaBaselineFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					baseline(param0: com.facebook.yoga.YogaNode, param1: number, param2: number): number;
				});
				public constructor();
				public baseline(param0: com.facebook.yoga.YogaNode, param1: number, param2: number): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaConfig extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaConfig>;
				public static SPACING_TYPE: number;
				public setExperimentalFeatureEnabled(param0: com.facebook.yoga.YogaExperimentalFeature, param1: boolean): void;
				public setPointScaleFactor(param0: number): void;
				public setUseWebDefaults(param0: boolean): void;
				public setPrintTreeFlag(param0: boolean): void;
				public setUseLegacyStretchBehaviour(param0: boolean): void;
				public setShouldDiffLayoutWithoutLegacyStretchBehaviour(param0: boolean): void;
				public finalize(): void;
				public getLogger(): com.facebook.yoga.YogaLogger;
				public constructor();
				public setLogger(param0: com.facebook.yoga.YogaLogger): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export abstract class YogaConfigFactory extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaConfigFactory>;
				public static create(): com.facebook.yoga.YogaConfig;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaConstants extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaConstants>;
				public static UNDEFINED: number;
				public static getUndefined(): number;
				public static isUndefined(param0: number): boolean;
				public static isUndefined(param0: com.facebook.yoga.YogaValue): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaDimension {
				public static class: java.lang.Class<com.facebook.yoga.YogaDimension>;
				public static WIDTH: com.facebook.yoga.YogaDimension;
				public static HEIGHT: com.facebook.yoga.YogaDimension;
				public intValue(): number;
				public static fromInt(param0: number): com.facebook.yoga.YogaDimension;
				public static values(): native.Array<com.facebook.yoga.YogaDimension>;
				public static valueOf(param0: string): com.facebook.yoga.YogaDimension;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaDirection {
				public static class: java.lang.Class<com.facebook.yoga.YogaDirection>;
				public static INHERIT: com.facebook.yoga.YogaDirection;
				public static LTR: com.facebook.yoga.YogaDirection;
				public static RTL: com.facebook.yoga.YogaDirection;
				public static valueOf(param0: string): com.facebook.yoga.YogaDirection;
				public static fromInt(param0: number): com.facebook.yoga.YogaDirection;
				public intValue(): number;
				public static values(): native.Array<com.facebook.yoga.YogaDirection>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaDisplay {
				public static class: java.lang.Class<com.facebook.yoga.YogaDisplay>;
				public static FLEX: com.facebook.yoga.YogaDisplay;
				public static NONE: com.facebook.yoga.YogaDisplay;
				public static values(): native.Array<com.facebook.yoga.YogaDisplay>;
				public intValue(): number;
				public static fromInt(param0: number): com.facebook.yoga.YogaDisplay;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.facebook.yoga.YogaDisplay;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaEdge {
				public static class: java.lang.Class<com.facebook.yoga.YogaEdge>;
				public static LEFT: com.facebook.yoga.YogaEdge;
				public static TOP: com.facebook.yoga.YogaEdge;
				public static RIGHT: com.facebook.yoga.YogaEdge;
				public static BOTTOM: com.facebook.yoga.YogaEdge;
				public static START: com.facebook.yoga.YogaEdge;
				public static END: com.facebook.yoga.YogaEdge;
				public static HORIZONTAL: com.facebook.yoga.YogaEdge;
				public static VERTICAL: com.facebook.yoga.YogaEdge;
				public static ALL: com.facebook.yoga.YogaEdge;
				public static fromInt(param0: number): com.facebook.yoga.YogaEdge;
				public static values(): native.Array<com.facebook.yoga.YogaEdge>;
				public intValue(): number;
				public static valueOf(param0: string): com.facebook.yoga.YogaEdge;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaExperimentalFeature {
				public static class: java.lang.Class<com.facebook.yoga.YogaExperimentalFeature>;
				public static WEB_FLEX_BASIS: com.facebook.yoga.YogaExperimentalFeature;
				public static values(): native.Array<com.facebook.yoga.YogaExperimentalFeature>;
				public static valueOf(param0: string): com.facebook.yoga.YogaExperimentalFeature;
				public intValue(): number;
				public static fromInt(param0: number): com.facebook.yoga.YogaExperimentalFeature;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaFlexDirection {
				public static class: java.lang.Class<com.facebook.yoga.YogaFlexDirection>;
				public static COLUMN: com.facebook.yoga.YogaFlexDirection;
				public static COLUMN_REVERSE: com.facebook.yoga.YogaFlexDirection;
				public static ROW: com.facebook.yoga.YogaFlexDirection;
				public static ROW_REVERSE: com.facebook.yoga.YogaFlexDirection;
				public intValue(): number;
				public static values(): native.Array<com.facebook.yoga.YogaFlexDirection>;
				public static valueOf(param0: string): com.facebook.yoga.YogaFlexDirection;
				public static fromInt(param0: number): com.facebook.yoga.YogaFlexDirection;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaJustify {
				public static class: java.lang.Class<com.facebook.yoga.YogaJustify>;
				public static FLEX_START: com.facebook.yoga.YogaJustify;
				public static CENTER: com.facebook.yoga.YogaJustify;
				public static FLEX_END: com.facebook.yoga.YogaJustify;
				public static SPACE_BETWEEN: com.facebook.yoga.YogaJustify;
				public static SPACE_AROUND: com.facebook.yoga.YogaJustify;
				public static SPACE_EVENLY: com.facebook.yoga.YogaJustify;
				public static values(): native.Array<com.facebook.yoga.YogaJustify>;
				public intValue(): number;
				public static valueOf(param0: string): com.facebook.yoga.YogaJustify;
				public static fromInt(param0: number): com.facebook.yoga.YogaJustify;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaLayoutType {
				public static class: java.lang.Class<com.facebook.yoga.YogaLayoutType>;
				public static LAYOUT: com.facebook.yoga.YogaLayoutType;
				public static MEASURE: com.facebook.yoga.YogaLayoutType;
				public static CACHED_LAYOUT: com.facebook.yoga.YogaLayoutType;
				public static CACHED_MEASURE: com.facebook.yoga.YogaLayoutType;
				public static valueOf(param0: string): com.facebook.yoga.YogaLayoutType;
				public static values(): native.Array<com.facebook.yoga.YogaLayoutType>;
				public intValue(): number;
				public static fromInt(param0: number): com.facebook.yoga.YogaLayoutType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaLogLevel {
				public static class: java.lang.Class<com.facebook.yoga.YogaLogLevel>;
				public static ERROR: com.facebook.yoga.YogaLogLevel;
				public static WARN: com.facebook.yoga.YogaLogLevel;
				public static INFO: com.facebook.yoga.YogaLogLevel;
				public static DEBUG: com.facebook.yoga.YogaLogLevel;
				public static VERBOSE: com.facebook.yoga.YogaLogLevel;
				public static FATAL: com.facebook.yoga.YogaLogLevel;
				public static values(): native.Array<com.facebook.yoga.YogaLogLevel>;
				public static valueOf(param0: string): com.facebook.yoga.YogaLogLevel;
				public intValue(): number;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static fromInt(param0: number): com.facebook.yoga.YogaLogLevel;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaLogger extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaLogger>;
				/**
				 * Constructs a new instance of the com.facebook.yoga.YogaLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					log(param0: com.facebook.yoga.YogaNode, param1: com.facebook.yoga.YogaLogLevel, param2: string): void;
				});
				public constructor();
				public log(param0: com.facebook.yoga.YogaNode, param1: com.facebook.yoga.YogaLogLevel, param2: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaMeasureFunction extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaMeasureFunction>;
				/**
				 * Constructs a new instance of the com.facebook.yoga.YogaMeasureFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					measure(param0: com.facebook.yoga.YogaNode, param1: number, param2: com.facebook.yoga.YogaMeasureMode, param3: number, param4: com.facebook.yoga.YogaMeasureMode): number;
				});
				public constructor();
				public measure(param0: com.facebook.yoga.YogaNode, param1: number, param2: com.facebook.yoga.YogaMeasureMode, param3: number, param4: com.facebook.yoga.YogaMeasureMode): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaMeasureMode {
				public static class: java.lang.Class<com.facebook.yoga.YogaMeasureMode>;
				public static UNDEFINED: com.facebook.yoga.YogaMeasureMode;
				public static EXACTLY: com.facebook.yoga.YogaMeasureMode;
				public static AT_MOST: com.facebook.yoga.YogaMeasureMode;
				public static valueOf(param0: string): com.facebook.yoga.YogaMeasureMode;
				public intValue(): number;
				public static fromInt(param0: number): com.facebook.yoga.YogaMeasureMode;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static values(): native.Array<com.facebook.yoga.YogaMeasureMode>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaMeasureOutput extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaMeasureOutput>;
				public static getWidth(param0: number): number;
				public static getHeight(param0: number): number;
				public static make(param0: number, param1: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaNative extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaNative>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export abstract class YogaNode extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaNode>;
				public setHeight(param0: number): void;
				public getFlexGrow(): number;
				public dirty(): void;
				public setDisplay(param0: com.facebook.yoga.YogaDisplay): void;
				public isBaselineDefined(): boolean;
				public setMaxHeightPercent(param0: number): void;
				public setAlignContent(param0: com.facebook.yoga.YogaAlign): void;
				public setFlexBasisPercent(param0: number): void;
				public getChildAt(param0: number): com.facebook.yoga.YogaNode;
				public setDirection(param0: com.facebook.yoga.YogaDirection): void;
				public setOverflow(param0: com.facebook.yoga.YogaOverflow): void;
				public getLayoutBorder(param0: com.facebook.yoga.YogaEdge): number;
				public setFlexShrink(param0: number): void;
				public getMaxHeight(): com.facebook.yoga.YogaValue;
				public getLayoutY(): number;
				public setMaxWidthPercent(param0: number): void;
				public setWidth(param0: number): void;
				public setAlignSelf(param0: com.facebook.yoga.YogaAlign): void;
				public setPositionType(param0: com.facebook.yoga.YogaPositionType): void;
				public setPosition(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public getStyleDirection(): com.facebook.yoga.YogaDirection;
				public setAspectRatio(param0: number): void;
				public setMaxHeight(param0: number): void;
				public setBaselineFunction(param0: com.facebook.yoga.YogaBaselineFunction): void;
				public getHeight(): com.facebook.yoga.YogaValue;
				public setMinWidth(param0: number): void;
				public setFlexGrow(param0: number): void;
				public setMaxWidth(param0: number): void;
				public setPadding(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public getAlignItems(): com.facebook.yoga.YogaAlign;
				public isReferenceBaseline(): boolean;
				public setData(param0: any): void;
				public getFlexShrink(): number;
				public getWidth(): com.facebook.yoga.YogaValue;
				public getChildCount(): number;
				public getWrap(): com.facebook.yoga.YogaWrap;
				public isDirty(): boolean;
				public getLayoutHeight(): number;
				public setMarginPercent(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				/** @deprecated */
				public getParent(): com.facebook.yoga.YogaNode;
				public getMaxWidth(): com.facebook.yoga.YogaValue;
				public setFlexBasis(param0: number): void;
				public setFlexDirection(param0: com.facebook.yoga.YogaFlexDirection): void;
				public setWidthAuto(): void;
				public setBorder(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public getDisplay(): com.facebook.yoga.YogaDisplay;
				public setMarginAuto(param0: com.facebook.yoga.YogaEdge): void;
				public copyStyle(param0: com.facebook.yoga.YogaNode): void;
				public getPadding(param0: com.facebook.yoga.YogaEdge): com.facebook.yoga.YogaValue;
				public getData(): any;
				public constructor();
				public getFlex(): number;
				public setIsReferenceBaseline(param0: boolean): void;
				public setMinWidthPercent(param0: number): void;
				public removeChildAt(param0: number): com.facebook.yoga.YogaNode;
				public getJustifyContent(): com.facebook.yoga.YogaJustify;
				public getPosition(param0: com.facebook.yoga.YogaEdge): com.facebook.yoga.YogaValue;
				public addChildAt(param0: com.facebook.yoga.YogaNode, param1: number): void;
				public getLayoutMargin(param0: com.facebook.yoga.YogaEdge): number;
				public getMargin(param0: com.facebook.yoga.YogaEdge): com.facebook.yoga.YogaValue;
				public getFlexBasis(): com.facebook.yoga.YogaValue;
				public getLayoutPadding(param0: com.facebook.yoga.YogaEdge): number;
				public isMeasureDefined(): boolean;
				public hasNewLayout(): boolean;
				public indexOf(param0: com.facebook.yoga.YogaNode): number;
				public getOwner(): com.facebook.yoga.YogaNode;
				public getAspectRatio(): number;
				public setFlexBasisAuto(): void;
				public setStyleInputs(param0: native.Array<number>, param1: number): void;
				public setHeightPercent(param0: number): void;
				public getLayoutX(): number;
				public cloneWithoutChildren(): com.facebook.yoga.YogaNode;
				public print(): void;
				public getOverflow(): com.facebook.yoga.YogaOverflow;
				public getLayoutWidth(): number;
				public setMeasureFunction(param0: com.facebook.yoga.YogaMeasureFunction): void;
				public setHeightAuto(): void;
				public static create(): com.facebook.yoga.YogaNode;
				public setMinHeight(param0: number): void;
				public reset(): void;
				public setFlex(param0: number): void;
				public calculateLayout(param0: number, param1: number): void;
				public getAlignContent(): com.facebook.yoga.YogaAlign;
				public markLayoutSeen(): void;
				public setJustifyContent(param0: com.facebook.yoga.YogaJustify): void;
				public getPositionType(): com.facebook.yoga.YogaPositionType;
				public getMinHeight(): com.facebook.yoga.YogaValue;
				public setPaddingPercent(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public setAlignItems(param0: com.facebook.yoga.YogaAlign): void;
				public getAlignSelf(): com.facebook.yoga.YogaAlign;
				public getMinWidth(): com.facebook.yoga.YogaValue;
				public getBorder(param0: com.facebook.yoga.YogaEdge): number;
				public setMinHeightPercent(param0: number): void;
				public getLayoutDirection(): com.facebook.yoga.YogaDirection;
				public static create(param0: com.facebook.yoga.YogaConfig): com.facebook.yoga.YogaNode;
				public setWrap(param0: com.facebook.yoga.YogaWrap): void;
				public setPositionPercent(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public setWidthPercent(param0: number): void;
				public getFlexDirection(): com.facebook.yoga.YogaFlexDirection;
				public setMargin(param0: com.facebook.yoga.YogaEdge, param1: number): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaNodeCloneFunction extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaNodeCloneFunction>;
				/**
				 * Constructs a new instance of the com.facebook.yoga.YogaNodeCloneFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					cloneNode(param0: com.facebook.yoga.YogaNode, param1: com.facebook.yoga.YogaNode, param2: number): com.facebook.yoga.YogaNode;
				});
				public constructor();
				public cloneNode(param0: com.facebook.yoga.YogaNode, param1: com.facebook.yoga.YogaNode, param2: number): com.facebook.yoga.YogaNode;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export abstract class YogaNodeFactory extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaNodeFactory>;
				public static create(param0: com.facebook.yoga.YogaConfig): com.facebook.yoga.YogaNode;
				public static create(): com.facebook.yoga.YogaNode;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export abstract class YogaNodeJNIBase extends com.facebook.yoga.YogaNode implements java.lang.Cloneable {
				public static class: java.lang.Class<com.facebook.yoga.YogaNodeJNIBase>;
				public mNativePointer: number;
				public setHeight(param0: number): void;
				public getFlexGrow(): number;
				public dirty(): void;
				public setDisplay(param0: com.facebook.yoga.YogaDisplay): void;
				public isBaselineDefined(): boolean;
				public getChildAt(param0: number): com.facebook.yoga.YogaNodeJNIBase;
				public setMaxHeightPercent(param0: number): void;
				public setAlignContent(param0: com.facebook.yoga.YogaAlign): void;
				public setFlexBasisPercent(param0: number): void;
				public getChildAt(param0: number): com.facebook.yoga.YogaNode;
				public setDirection(param0: com.facebook.yoga.YogaDirection): void;
				public setOverflow(param0: com.facebook.yoga.YogaOverflow): void;
				public getLayoutBorder(param0: com.facebook.yoga.YogaEdge): number;
				public setFlexShrink(param0: number): void;
				public getMaxHeight(): com.facebook.yoga.YogaValue;
				public getLayoutY(): number;
				public setMaxWidthPercent(param0: number): void;
				public setWidth(param0: number): void;
				public setAlignSelf(param0: com.facebook.yoga.YogaAlign): void;
				public setPositionType(param0: com.facebook.yoga.YogaPositionType): void;
				public setPosition(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public getStyleDirection(): com.facebook.yoga.YogaDirection;
				public setAspectRatio(param0: number): void;
				public setMaxHeight(param0: number): void;
				public setBaselineFunction(param0: com.facebook.yoga.YogaBaselineFunction): void;
				public getHeight(): com.facebook.yoga.YogaValue;
				public setMinWidth(param0: number): void;
				public setFlexGrow(param0: number): void;
				public setMaxWidth(param0: number): void;
				public setPadding(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public getAlignItems(): com.facebook.yoga.YogaAlign;
				public isReferenceBaseline(): boolean;
				public setData(param0: any): void;
				public dirtyAllDescendants(): void;
				public getFlexShrink(): number;
				public getWidth(): com.facebook.yoga.YogaValue;
				public getChildCount(): number;
				public getWrap(): com.facebook.yoga.YogaWrap;
				public isDirty(): boolean;
				public getLayoutHeight(): number;
				public setMarginPercent(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				/** @deprecated */
				public getParent(): com.facebook.yoga.YogaNode;
				public getMaxWidth(): com.facebook.yoga.YogaValue;
				public setFlexBasis(param0: number): void;
				public setFlexDirection(param0: com.facebook.yoga.YogaFlexDirection): void;
				public setWidthAuto(): void;
				public setBorder(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public getDisplay(): com.facebook.yoga.YogaDisplay;
				public baseline(param0: number, param1: number): number;
				public getOwner(): com.facebook.yoga.YogaNodeJNIBase;
				public setMarginAuto(param0: com.facebook.yoga.YogaEdge): void;
				public copyStyle(param0: com.facebook.yoga.YogaNode): void;
				public getPadding(param0: com.facebook.yoga.YogaEdge): com.facebook.yoga.YogaValue;
				public getData(): any;
				public getFlex(): number;
				public setIsReferenceBaseline(param0: boolean): void;
				public setMinWidthPercent(param0: number): void;
				public removeChildAt(param0: number): com.facebook.yoga.YogaNode;
				public getJustifyContent(): com.facebook.yoga.YogaJustify;
				public getPosition(param0: com.facebook.yoga.YogaEdge): com.facebook.yoga.YogaValue;
				public addChildAt(param0: com.facebook.yoga.YogaNode, param1: number): void;
				public getLayoutMargin(param0: com.facebook.yoga.YogaEdge): number;
				public getMargin(param0: com.facebook.yoga.YogaEdge): com.facebook.yoga.YogaValue;
				public getFlexBasis(): com.facebook.yoga.YogaValue;
				public getLayoutPadding(param0: com.facebook.yoga.YogaEdge): number;
				public isMeasureDefined(): boolean;
				public hasNewLayout(): boolean;
				public indexOf(param0: com.facebook.yoga.YogaNode): number;
				public getOwner(): com.facebook.yoga.YogaNode;
				public getAspectRatio(): number;
				public setFlexBasisAuto(): void;
				public setStyleInputs(param0: native.Array<number>, param1: number): void;
				public setHeightPercent(param0: number): void;
				public getLayoutX(): number;
				public cloneWithoutChildren(): com.facebook.yoga.YogaNode;
				public print(): void;
				public getOverflow(): com.facebook.yoga.YogaOverflow;
				public getLayoutWidth(): number;
				public removeChildAt(param0: number): com.facebook.yoga.YogaNodeJNIBase;
				public setMeasureFunction(param0: com.facebook.yoga.YogaMeasureFunction): void;
				public setHeightAuto(): void;
				public getDoesLegacyStretchFlagAffectsLayout(): boolean;
				/** @deprecated */
				public getParent(): com.facebook.yoga.YogaNodeJNIBase;
				public setMinHeight(param0: number): void;
				public reset(): void;
				public setFlex(param0: number): void;
				public cloneWithoutChildren(): com.facebook.yoga.YogaNodeJNIBase;
				public calculateLayout(param0: number, param1: number): void;
				public getAlignContent(): com.facebook.yoga.YogaAlign;
				public measure(param0: number, param1: number, param2: number, param3: number): number;
				public markLayoutSeen(): void;
				public setJustifyContent(param0: com.facebook.yoga.YogaJustify): void;
				public getPositionType(): com.facebook.yoga.YogaPositionType;
				public getMinHeight(): com.facebook.yoga.YogaValue;
				public setPaddingPercent(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public setAlignItems(param0: com.facebook.yoga.YogaAlign): void;
				public getAlignSelf(): com.facebook.yoga.YogaAlign;
				public getMinWidth(): com.facebook.yoga.YogaValue;
				public getBorder(param0: com.facebook.yoga.YogaEdge): number;
				public setMinHeightPercent(param0: number): void;
				public getLayoutDirection(): com.facebook.yoga.YogaDirection;
				public setWrap(param0: com.facebook.yoga.YogaWrap): void;
				public setPositionPercent(param0: com.facebook.yoga.YogaEdge, param1: number): void;
				public setWidthPercent(param0: number): void;
				public getFlexDirection(): com.facebook.yoga.YogaFlexDirection;
				public setMargin(param0: com.facebook.yoga.YogaEdge, param1: number): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaNodeJNIFinalizer extends com.facebook.yoga.YogaNodeJNIBase {
				public static class: java.lang.Class<com.facebook.yoga.YogaNodeJNIFinalizer>;
				public finalize(): void;
				public constructor(param0: com.facebook.yoga.YogaConfig);
				public freeNatives(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaNodeType {
				public static class: java.lang.Class<com.facebook.yoga.YogaNodeType>;
				public static DEFAULT: com.facebook.yoga.YogaNodeType;
				public static TEXT: com.facebook.yoga.YogaNodeType;
				public intValue(): number;
				public static values(): native.Array<com.facebook.yoga.YogaNodeType>;
				public static valueOf(param0: string): com.facebook.yoga.YogaNodeType;
				public static fromInt(param0: number): com.facebook.yoga.YogaNodeType;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaOverflow {
				public static class: java.lang.Class<com.facebook.yoga.YogaOverflow>;
				public static VISIBLE: com.facebook.yoga.YogaOverflow;
				public static HIDDEN: com.facebook.yoga.YogaOverflow;
				public static SCROLL: com.facebook.yoga.YogaOverflow;
				public static fromInt(param0: number): com.facebook.yoga.YogaOverflow;
				public intValue(): number;
				public static values(): native.Array<com.facebook.yoga.YogaOverflow>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.facebook.yoga.YogaOverflow;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaPositionType {
				public static class: java.lang.Class<com.facebook.yoga.YogaPositionType>;
				public static RELATIVE: com.facebook.yoga.YogaPositionType;
				public static ABSOLUTE: com.facebook.yoga.YogaPositionType;
				public static fromInt(param0: number): com.facebook.yoga.YogaPositionType;
				public static valueOf(param0: string): com.facebook.yoga.YogaPositionType;
				public intValue(): number;
				public static values(): native.Array<com.facebook.yoga.YogaPositionType>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaPrintOptions {
				public static class: java.lang.Class<com.facebook.yoga.YogaPrintOptions>;
				public static LAYOUT: com.facebook.yoga.YogaPrintOptions;
				public static STYLE: com.facebook.yoga.YogaPrintOptions;
				public static CHILDREN: com.facebook.yoga.YogaPrintOptions;
				public static valueOf(param0: string): com.facebook.yoga.YogaPrintOptions;
				public intValue(): number;
				public static values(): native.Array<com.facebook.yoga.YogaPrintOptions>;
				public static fromInt(param0: number): com.facebook.yoga.YogaPrintOptions;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaStyleInputs extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaStyleInputs>;
				public static LAYOUT_DIRECTION: number;
				public static FLEX_DIRECTION: number;
				public static FLEX: number;
				public static FLEX_GROW: number;
				public static FLEX_SHRINK: number;
				public static FLEX_BASIS: number;
				public static FLEX_BASIS_PERCENT: number;
				public static FLEX_BASIS_AUTO: number;
				public static FLEX_WRAP: number;
				public static WIDTH: number;
				public static WIDTH_PERCENT: number;
				public static WIDTH_AUTO: number;
				public static MIN_WIDTH: number;
				public static MIN_WIDTH_PERCENT: number;
				public static MAX_WIDTH: number;
				public static MAX_WIDTH_PERCENT: number;
				public static HEIGHT: number;
				public static HEIGHT_PERCENT: number;
				public static HEIGHT_AUTO: number;
				public static MIN_HEIGHT: number;
				public static MIN_HEIGHT_PERCENT: number;
				public static MAX_HEIGHT: number;
				public static MAX_HEIGHT_PERCENT: number;
				public static JUSTIFY_CONTENT: number;
				public static ALIGN_ITEMS: number;
				public static ALIGN_SELF: number;
				public static ALIGN_CONTENT: number;
				public static POSITION_TYPE: number;
				public static ASPECT_RATIO: number;
				public static OVERFLOW: number;
				public static DISPLAY: number;
				public static MARGIN: number;
				public static MARGIN_PERCENT: number;
				public static MARGIN_AUTO: number;
				public static PADDING: number;
				public static PADDING_PERCENT: number;
				public static BORDER: number;
				public static POSITION: number;
				public static POSITION_PERCENT: number;
				public static IS_REFERENCE_BASELINE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaUnit {
				public static class: java.lang.Class<com.facebook.yoga.YogaUnit>;
				public static UNDEFINED: com.facebook.yoga.YogaUnit;
				public static POINT: com.facebook.yoga.YogaUnit;
				public static PERCENT: com.facebook.yoga.YogaUnit;
				public static AUTO: com.facebook.yoga.YogaUnit;
				public static fromInt(param0: number): com.facebook.yoga.YogaUnit;
				public static values(): native.Array<com.facebook.yoga.YogaUnit>;
				public intValue(): number;
				public static valueOf(param0: string): com.facebook.yoga.YogaUnit;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaValue extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.yoga.YogaValue>;
				public value: number;
				public unit: com.facebook.yoga.YogaUnit;
				public hashCode(): number;
				public constructor(param0: number, param1: com.facebook.yoga.YogaUnit);
				public equals(param0: any): boolean;
				public static parse(param0: string): com.facebook.yoga.YogaValue;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export class YogaWrap {
				public static class: java.lang.Class<com.facebook.yoga.YogaWrap>;
				public static NO_WRAP: com.facebook.yoga.YogaWrap;
				public static WRAP: com.facebook.yoga.YogaWrap;
				public static WRAP_REVERSE: com.facebook.yoga.YogaWrap;
				public static values(): native.Array<com.facebook.yoga.YogaWrap>;
				public intValue(): number;
				public static valueOf(param0: string): com.facebook.yoga.YogaWrap;
				public static fromInt(param0: number): com.facebook.yoga.YogaWrap;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.yoga.android.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class VirtualYogaLayout extends globalAndroid.view.ViewGroup {
					public static class: java.lang.Class<com.facebook.yoga.android.VirtualYogaLayout>;
					public focusSearch(param0: number): globalAndroid.view.View;
					public addView(param0: globalAndroid.view.View, param1: com.facebook.yoga.YogaNode): void;
					public focusableViewAvailable(param0: globalAndroid.view.View): void;
					public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
					public isLayoutRequested(): boolean;
					public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
					public isTextDirectionResolved(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public isLayoutDirectionResolved(): boolean;
					public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public addView(param0: globalAndroid.view.View): void;
					public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
					public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
					public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
					public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
					public recomputeViewAttributes(param0: globalAndroid.view.View): void;
					public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
					public clearChildFocus(param0: globalAndroid.view.View): void;
					public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public getLayoutDirection(): number;
					/** @deprecated */
					public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
					public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
					public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
					public bringChildToFront(param0: globalAndroid.view.View): void;
					public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: globalAndroid.view.View): void;
					/** @deprecated */
					public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public childDrawableStateChanged(param0: globalAndroid.view.View): void;
					public getTextDirection(): number;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public requestFitSystemWindows(): void;
					public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public canResolveTextAlignment(): boolean;
					public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
					public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
					public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
					public transferChildren(param0: globalAndroid.view.ViewGroup): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
					public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
					public addView(param0: globalAndroid.view.View, param1: number): void;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public sendAccessibilityEvent(param0: number): void;
					public getYogaNode(): com.facebook.yoga.YogaNode;
					public requestLayout(): void;
					public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public canResolveLayoutDirection(): boolean;
					public getTextAlignment(): number;
					public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
					public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public removeView(param0: globalAndroid.view.View): void;
					public constructor(param0: globalAndroid.content.Context);
					public onStopNestedScroll(param0: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class YogaLayout extends globalAndroid.view.ViewGroup {
					public static class: java.lang.Class<com.facebook.yoga.android.YogaLayout>;
					public focusSearch(param0: number): globalAndroid.view.View;
					public addView(param0: globalAndroid.view.View, param1: com.facebook.yoga.YogaNode): void;
					public focusableViewAvailable(param0: globalAndroid.view.View): void;
					public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
					public isLayoutRequested(): boolean;
					public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
					public isTextDirectionResolved(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public isLayoutDirectionResolved(): boolean;
					public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public addView(param0: globalAndroid.view.View): void;
					/** @deprecated */
					public invalidate(param0: globalAndroid.graphics.Rect): void;
					public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
					public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
					public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
					public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
					public recomputeViewAttributes(param0: globalAndroid.view.View): void;
					public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
					public removeViews(param0: number, param1: number): void;
					public clearChildFocus(param0: globalAndroid.view.View): void;
					public static applyLayoutParams(param0: com.facebook.yoga.android.YogaLayout.LayoutParams, param1: com.facebook.yoga.YogaNode, param2: globalAndroid.view.View): void;
					public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public getLayoutDirection(): number;
					/** @deprecated */
					public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
					public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
					public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
					public bringChildToFront(param0: globalAndroid.view.View): void;
					public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: globalAndroid.view.View): void;
					/** @deprecated */
					public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public childDrawableStateChanged(param0: globalAndroid.view.View): void;
					public getTextDirection(): number;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public requestFitSystemWindows(): void;
					public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
					public invalidate(): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public removeViewsInLayout(param0: number, param1: number): void;
					public removeAllViewsInLayout(): void;
					public canResolveTextAlignment(): boolean;
					public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
					public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
					public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
					public removeViewInLayout(param0: globalAndroid.view.View): void;
					public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
					public addView(param0: globalAndroid.view.View, param1: number): void;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public sendAccessibilityEvent(param0: number): void;
					public getYogaNode(): com.facebook.yoga.YogaNode;
					public requestLayout(): void;
					public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public invalidate(param0: globalAndroid.view.View): void;
					public onMeasure(param0: number, param1: number): void;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public canResolveLayoutDirection(): boolean;
					public getTextAlignment(): number;
					public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
					public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public removeView(param0: globalAndroid.view.View): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public removeViewAt(param0: number): void;
					public removeAllViews(): void;
					public onStopNestedScroll(param0: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
					/** @deprecated */
					public invalidate(param0: number, param1: number, param2: number, param3: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getYogaNodeForView(param0: globalAndroid.view.View): com.facebook.yoga.YogaNode;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				}
				export module YogaLayout {
					export class LayoutParams extends globalAndroid.view.ViewGroup.LayoutParams {
						public static class: java.lang.Class<com.facebook.yoga.android.YogaLayout.LayoutParams>;
						public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public constructor(param0: number, param1: number);
					}
					export class ViewMeasureFunction extends java.lang.Object implements com.facebook.yoga.YogaMeasureFunction {
						public static class: java.lang.Class<com.facebook.yoga.android.YogaLayout.ViewMeasureFunction>;
						public constructor();
						public measure(param0: com.facebook.yoga.YogaNode, param1: number, param2: com.facebook.yoga.YogaMeasureMode, param3: number, param4: com.facebook.yoga.YogaMeasureMode): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class YogaViewLayoutFactory extends java.lang.Object implements globalAndroid.view.LayoutInflater.Factory {
					public static class: java.lang.Class<com.facebook.yoga.android.YogaViewLayoutFactory>;
					public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
					public static getInstance(): com.facebook.yoga.android.YogaViewLayoutFactory;
				}
			}
		}
	}
}

