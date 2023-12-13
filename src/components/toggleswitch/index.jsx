const ToggleSwitch = ({ checked, onChange }) => (
  <div>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        role="switch"
        id="flexSwitchCheckDefault"
      />
    </div>
  </div>
);

export default ToggleSwitch;
