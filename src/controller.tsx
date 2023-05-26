import * as React from 'react';
import { Animate } from 'react-simple-animate';
import FlipNumbers from 'react-flip-numbers';
import { bubbleWithTail, bubble } from './constants/svgPath';

const commonAnimationProps = {
  easeType: 'cubic-bezier(0.86, 0, 0.07, 1)',
  start: {
    transform: 'translateY(0)',
  },
};

interface Props {
  onFocus: () => void;
  onBlur: () => void;
  controllerHeight?: number;
  controllerWidth?: number;
  height: number;
  value: number;
  dragX: number;
  showBubble: boolean;
  isControlByKeyBoard: boolean;
  isThin: boolean;
  onMouseDown: (MouseEvent) => void;
  onInteractEnd: (Event) => void;
  barColor?: string;
  textBackgroundColor?: string;
  textColor?: string;
  isTouchDevice: boolean;
  disabled?: boolean;
  shouldDisplayValue?: boolean;
  shouldAnimateNumber?: boolean;
  customController?: any;
  max: number;
  min: number;
  isFocusing?: boolean;
  focusStyle?: string;
}

const flipNumberProps = {
  height: 14,
  width: 9,
  color: 'black',
  background: 'white',
  perspective: 370,
  duration: 0.4,
  play: true,
  numberStyle: { outline: '1px solid transparent' },
  disabled: false,
};

export default React.forwardRef(function Controller(
  {
    onFocus,
    onBlur,
    controllerHeight = 0,
    controllerWidth = 0,
    height,
    dragX,
    showBubble,
    isControlByKeyBoard,
    value,
    onMouseDown,
    onInteractEnd,
    barColor,
    textBackgroundColor,
    textColor,
    isThin,
    isTouchDevice,
    disabled,
    shouldDisplayValue,
    customController,
    max,
    min,
    shouldAnimateNumber,
    isFocusing,
    focusStyle,
  }: Props,
  ref: any,
) {
  const controllerRootRef = (ref || {}).controllerRootRef;
  const controllerRef = (ref || {}).controllerRef;
  let top = (isThin ? height - controllerHeight : height - controllerHeight) / 2;

  if (customController) {
    top = isThin ? (height - controllerHeight) / 2 : height - controllerHeight;
  }

  return (
    <div
      {...{
        onClick: e => {
          if (typeof e.cancelable !== 'boolean' || e.cancelable) e.stopPropagation();
        },
        onFocus: onFocus,
        onBlur: onBlur,
      }}
      {...(isTouchDevice
        ? {}
        : {
            onMouseDown: onMouseDown,
            onMouseUp: onInteractEnd,
          })}
      tabIndex={0}
      style={{
        top: `${top}px`,
        position: 'absolute',
        cursor: disabled ? 'not-allowed' : '-webkit-grab',
        transform: `translateX(${dragX}px)`,
        transition: isControlByKeyBoard ? '0.15s all ease-in' : '0s all',
        width: controllerWidth,
        height: controllerHeight - 10,
        outline: 'none',
        ...(isTouchDevice ? { pointerEvents: 'none' } : null),
      }}
      role="slider"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuetext={value.toString()}
      ref={controllerRootRef}
    >
      {!customController && (
        <Animate
          play={showBubble}
          {...commonAnimationProps}
          duration={showBubble ? 0.2 : 0.3}
          start={{
            transform: 'translateY(0)',
          }}
          end={{
            transform: `translateY(-${isThin ? 32 : 22}px) scale(1.65)`,
          }}
          easeType="cubic-bezier(0.86, 0, 0.07, 1)"
          render={({ style }) => (
            <svg
              style={{
                position: 'absolute',
                top: '-25px',
                left: 0,
                ...style,
              }}
              x="0px"
              y="0px"
              width={`${controllerHeight}px`}
              height="64px"
              viewBox="0 0 40 64"
            >
              <path
                style={{
                  transition: '0.3s all',
                  fill: barColor,
                }}
                d={showBubble ? bubbleWithTail : bubble}
              />
            </svg>
          )}
        />
      )}

      <Animate
        play={showBubble}
        {...commonAnimationProps}
        end={{
          transform: `translateY(-${isThin ? 58 : 48}px) scale(1.3)`,
        }}
        duration={showBubble? 0.3 : 0.1}
        render={({ style }) =>
          customController ? (
            customController({
              ref: controllerRef,
              value,
            })
          ) : (
            <div
              style={{
                background: textBackgroundColor,
                height: `${controllerHeight}px`,
                width: `${controllerHeight}px`,
                borderRadius: '50%',
                position: 'absolute',
                ...(isFocusing && !isTouchDevice ? { boxShadow: focusStyle || 'rgb(0, 0, 0) 0px 0px 6px' } : null),
                ...style,
              }}
              aria-hidden="true"
            >
              {shouldDisplayValue && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: `${controllerHeight}px`,
                    color: textColor,
                    fontWeight: 600,
                    ...(shouldAnimateNumber
                      ? { top: '10px' }
                      : {
                          top: 0,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '15px',
                          height: `${controllerHeight}px`,
                        }),
                  }}
                >
                  {shouldAnimateNumber ? <FlipNumbers {...flipNumberProps} numbers={value.toString()} /> : value}
                </span>
              )}
            </div>
          )
        }
      />
    </div>
  );
});
