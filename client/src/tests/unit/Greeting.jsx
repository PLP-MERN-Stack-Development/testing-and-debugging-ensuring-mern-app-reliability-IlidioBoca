import React from 'react';

export function Greeting({ name, api }) {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    let active = true;
    if (api && api.fetchGreeting) {
      api.fetchGreeting(name).then((res) => {
        if (active) setMessage(res);
      });
    }
    return () => {
      active = false;
    };
  }, [api, name]);

  return <div data-testid="greeting">{message || `Olá, ${name}`}</div>;
}
