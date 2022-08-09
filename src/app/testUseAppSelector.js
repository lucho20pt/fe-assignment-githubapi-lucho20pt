const state = {
  github: {
    users: [{ id: 0 }],
    changed: false
  }
}

export const testUseAppSelector = (f) => f(state)
export const useAppGetUserNameMutation = (f) => f(state)
