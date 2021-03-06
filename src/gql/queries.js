import { gql } from "apollo-boost";

export const GET_LEAGUES = gql`
  query Leagues {
    leagues {
      id
      name
      description
      finishedMatches
      users {
        id
      }
      teams {
        id
      }
    }
  }
`;
export const GET_LEAGUE = gql`
  query League($id: ID) {
    league(where: { id: $id }) {
      name
      id
      description
      finishedMatches
      users {
        name
      }
      owner {
        name
        id
      }
      createdAt
      teams {
        name
        id
        points
        owner {
          id
        }
        users {
          id
          name
        }
      }
      users {
        name
        id
        pointsInLeague(where: { id: $id })
        matches {
          isFinished
          winner {
            id
          }
        }
        teams {
          name
          id

          league {
            id
          }
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query Users {
    users {
      name
      id
      leagues {
        id
      }
    }
  }
`;

export const GET_USER = gql`
  query User($id: ID) {
    user(where: { id: $id }) {
      id
      name
      picture
      createdAt
      teams {
        id
        name
        owner {
          id
        }
      }
      matches {
        id
        isFinished
        winner {
          id
        }
      }
      leagues {
        id
        name
        owner {
          id
        }
      }
    }
  }
`;

export const GET_TEAM = gql`
  query Team($id: ID) {
    team(where: { id: $id }) {
      id
      name
      description
      createdAt
      league {
        id
        name
      }
      users {
        matches {
          isFinished
          winner {
            id
          }
        }
        id
        name
        leagues {
          id
        }
      }
      owner {
        id
        name
      }
    }
  }
`;

export const GET_MATCHES = gql`
  query Matches($where: MatchWhereInput) {
    matches(where: $where) {
      id
      plannedAt
      isFinished

      user1 {
        picture
        id
        name
        teams {
          id
        }
      }
      user2 {
        picture
        id
        name
        teams {
          id
        }
      }
      user1points
      user2points
      winner {
        id
      }
      league {
        id
      }
    }
  }
`;
