/* 
* File: src\components\toggleswitch\index.jsx
* Project: Omni-Live-logistics-rep-assignment
* Author: Bizcloud Experts
* Date: 2024-01-12
* Confidential and Proprietary
*/
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
