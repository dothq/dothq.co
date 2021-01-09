use rocket_contrib::json::{JsonValue};

#[catch(404)]
pub fn not_found() -> JsonValue {
    json!({ "ok": false, "message": "This route or resource cannot be found.", "code": 404 })
}

#[catch(403)]
pub fn unauthorized() -> JsonValue {
    json!({ "ok": false, "message": "You are not authorized to do this.", "code": 403 })
}