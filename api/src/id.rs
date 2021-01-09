use rocket_contrib::json::{JsonValue};
use rand::Rng;

#[post("/id/create")]
pub fn create() -> JsonValue {
    let hex: Vec<char> = "0123456789abcdef".chars().collect();

    let mut rng = rand::thread_rng();

    let mut result = String::new();

    for _ in 0..24 {
        result.push(hex[rng.gen_range(0..16)]);
    }

    json!({ "id": result })
}