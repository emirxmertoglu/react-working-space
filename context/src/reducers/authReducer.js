export default function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        user: false,
      };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}
