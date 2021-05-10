use sqlx::PgPool;
use std::env::var;
use warp::test::request;
use warp::Filter;

use crate::reject::handle_rejection;
use crate::v3::api;

use super::utils::is_invalid_query;

#[tokio::test]
async fn invalid_query() {
    dotenv::dotenv().expect("Failed to load .env file");

    let uri = var("DATABASE_URL").unwrap();

    let pool = PgPool::connect(&uri).await.unwrap();

    let api = api(pool).recover(handle_rejection);

    is_invalid_query(
        request()
            .method("GET")
            .path("/v3/youtube_channels")
            .reply(&api)
            .await,
    );

    is_invalid_query(
        request()
            .method("GET")
            .path("/v3/youtube_channels?foo=bar")
            .reply(&api)
            .await,
    );
}
