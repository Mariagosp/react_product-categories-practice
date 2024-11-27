import cn from 'classnames';

export const NameList = props => {
  const { selectedPerson, setSelectedPerson, usersFromServer } = props;

  return (
    <p className="panel-tabs has-text-weight-bold">
      <a
        data-cy="FilterAllUsers"
        href="#/"
        onClick={() => setSelectedPerson('all')}
        className={cn({ 'is-active': selectedPerson === 'all' })}
      >
        All
      </a>
      {usersFromServer.map(user => (
        <a
          data-cy="FilterUser"
          href="#/"
          key={user.id}
          onClick={() => setSelectedPerson(user.name)}
          className={cn({ 'is-active': selectedPerson === user.name })}
        >
          {user.name}
        </a>
      ))}
    </p>
  );
};
