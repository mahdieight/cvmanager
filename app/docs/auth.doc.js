/**
 * Auth
 * @typedef  { object } Auth 
 * @property { string } _id
 * @property { string } firstname
 * @property { string } lastname
 * @property { string } mobile
 * @property { string } password
 * @property { string } mobile_verified_at
 * @property { string } avatar
 * @property { string } is_banned
 * @property { Date }   created_by
 * @property { Date }   createdAt
 * @property { Date }   updatedAt
 */


/**
 * login
 * @typedef  { object } auth.login
 * @property { string } mobile.required
 * @property { string } password.required
 */

/**
 * signup
 * @typedef { object } auth.signup
 * @property { string } firstname.required
 * @property { string } lastname.required
 * @property { string } mobile.required
 * @property { string } password.required
 * @property { string } password_confirm.required
 */

/**
 * refresh
 * @typedef { object } auth.refresh
 * @property { string } token.required
 */




/**
* auth server error response
* @typedef { object } auth.success_signup
* @property { string }     message
* @property { array<string> } data
* @property { array<string> } errors
*/


/**
 * auth user not found
 * @typedef { object } auth.user_notfound
 * @property { string }     message
 * @property { array<string> } data
 * @property { array<string> } errors
 */

