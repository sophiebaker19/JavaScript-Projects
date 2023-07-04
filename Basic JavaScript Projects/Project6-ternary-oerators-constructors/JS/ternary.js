function voteFunction() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18) ? "You aren't old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}