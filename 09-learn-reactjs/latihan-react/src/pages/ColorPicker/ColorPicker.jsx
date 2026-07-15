import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function hexToRgba(hex, opacity) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const a = opacity;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function InputColor({ getColor }) {
  const handleColorChange = (e) => {
    getColor(e.target.value);
  };

  return (
    <input
      type="color"
      className="form-control form-control-color "
      id="colorInput"
      defaultValue="#000000"
      onChange={handleColorChange}
      title="Choose your color"
      name="colorInput"
    />
  );
}

function InputOpacity({ getOpacity }) {
  const handleOpacityChange = (e) => {
    getOpacity(e.target.value);
  };

  return (
    <div className="w-50">
      <label htmlFor="opacityInput" className="form-label">
        Opacity
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="1"
        defaultValue="1"
        step="0.1"
        id="opacityInput"
        name="opacityInput"
        onChange={handleOpacityChange}
      />
    </div>
  );
}

function ResultColor({ color, opacity }) {
  const rgbaColor = hexToRgba(color, opacity);

  return (
    <div className="text-center">
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: rgbaColor,
          border: '1px solid black',
          marginInline: 'auto',
        }}
        className="rounded mb-4"
      ></div>
      <p>Hex: {color}</p>
      <p>RGB: {rgbaColor}</p>
      <p>Opacity: {Number(opacity) * 100}%</p>
      <code>
        background-color: {color} <br />
        opacity: {opacity}
      </code>
    </div>
  );
}

function ColorPicker() {
  const [color, setColor] = useState('#000000');
  const [opacity, setOpacity] = useState('1');

  const getColor = (color) => {
    setColor(color);
  };

  const getOpacity = (opacity) => {
    setOpacity(opacity);
  };

  return (
    <div className="container p-5">
      <h1 className="text-center mb-5">Color Generator</h1>
      <div className="d-flex flex-column gap-2 align-items-center">
        <div className="mb-3 d-flex flex-column gap-4 align-items-center w-100">
          <InputColor getColor={getColor} />
          <InputOpacity getOpacity={getOpacity} />
        </div>
        <ResultColor color={color} opacity={opacity} />
      </div>
    </div>
  );
}

export default ColorPicker;
