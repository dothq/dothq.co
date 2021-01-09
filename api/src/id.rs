use rocket_contrib::json::{JsonValue};

#[post("/id/create")]
pub fn create() -> JsonValue {
    json!({ "ok": true })
}