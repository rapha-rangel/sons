import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches({onChange}) {

  return (
    <div>
      <Switch  onChange={onChange}  />
    </div>
  );
}
