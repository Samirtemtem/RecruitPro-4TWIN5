import { RadioGroup } from "@headlessui/react";

function User({ user, selected, onSelect }) {
  return (
    <RadioGroup.Option
      value={user}
      onClick={() => onSelect(user)} // Call onSelect when the option is clicked
      style={{
        display: 'flex',
        cursor: 'pointer',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: selected ? 'rgba(75, 85, 99, 0.75)' : 'white',
        color: selected ? 'white' : 'black',
      }}
    >
      {({ checked }) => (
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{
                objectFit: 'cover',
                height: '40px',
                width: '40px',
                borderRadius: '50%',
                marginRight: '16px',
              }}
              src={user.image} // This should now point to the correct URL
              alt={user.name}
            />
            <div style={{ fontSize: '14px' }}>
              <div style={{ fontWeight: '500', color: checked ? 'white' : 'black' }}>{user.name}</div>
              <div style={{ color: checked ? 'white' : 'rgba(0, 0, 0, 0.6)' }}>{user.email}</div>
            </div>
          </div>
          {checked && <div style={{ color: 'white' }}>✔️</div>}
        </div>
      )}
    </RadioGroup.Option>
  );
}

export default User;