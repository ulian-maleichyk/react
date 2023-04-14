import Character from "../character/Character";

function Characters({xxx:characters}) {
    return (
<div>
{
characters.map (value => (<Character value={value}/>))

}
</div>
    );
  }

  export default Characters