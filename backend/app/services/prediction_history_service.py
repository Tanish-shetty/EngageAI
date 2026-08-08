from sqlalchemy.orm import Session

from app.models.prediction_history import PredictionHistory


class PredictionHistoryService:

    @staticmethod
    def save(
        db: Session,
        user_id: int,
        user_input: dict,
        prediction: dict,
        recommendation: dict,
    ):

        record = PredictionHistory(
            user_id=user_id,
            input_data=user_input,
            prediction=prediction,
            recommendation=recommendation,
        )

        db.add(record)
        db.commit()
        db.refresh(record)

        return record

    @staticmethod
    def get_all(
        db: Session,
        user_id: int,
    ):
        return (
            db.query(PredictionHistory)
            .filter(
                PredictionHistory.user_id == user_id
            )
            .order_by(
                PredictionHistory.created_at.desc()
            )
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        prediction_id: int,
        user_id: int,
    ):
        return (
            db.query(PredictionHistory)
            .filter(
                PredictionHistory.id == prediction_id,
                PredictionHistory.user_id == user_id,
            )
            .first()
        )