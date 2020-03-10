import React from "react";

function Colors({ colors, setColors }) {
  return (
    <div id="colors" className="content">
      <h2>Colors</h2>
      <form>
        <div className="form-group">
          <label htmlFor="primaryColor">Pick your primary color</label>
          <input
            onChange={e => setColors({ ...colors, primary: e.target.value })}
            type="color"
            name="primaryColor"
            id="primaryColor"
            value={colors.primary}
          />
        </div>
        <div className="form-group">
          <label htmlFor="secondaryColor">Pick your secondary color</label>
          <input
            onChange={e => {
              setColors({ ...colors, secondary: e.target.value });
            }}
            type="color"
            name="secondaryColor"
            id="secondaryColor"
            value={colors.secondary}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tertiaryColor">Pick your tertiary color</label>
          <input
            onChange={e => setColors({ ...colors, tertiary: e.target.value })}
            type="color"
            name="tertiaryColor"
            id="tertiaryColor"
            value={colors.tertiary}
          />
        </div>
      </form>
    </div>
  );
}

export default Colors;
