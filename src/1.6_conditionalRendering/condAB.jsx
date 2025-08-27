function ItemLet({ name, isPacked }) {
  let content;
  if (isPacked) {
    content = name + ' ✅';
  } else {
    content = name + ' ❌';
  }
  return (
    <li className="item">{content}</li>
  );
}

function ItemIf({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name + ' ✅'}</li>
  } return <li className="item">{name + ' ❌'}</li>
}

function ItemTern({ name, isPacked }) {
  return (

    <li className="item">
      {isPacked ? name + ' ✅' : name + ' ❌'}
    </li>

  );
}



export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <ItemLet
          isPacked={true}
          name="Space suit"
        />
        <ItemIf
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <ItemTern
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}