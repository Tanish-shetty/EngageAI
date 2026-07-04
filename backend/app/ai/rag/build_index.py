from app.core.logger import logger

from .index_builder import IndexBuilder


def main():

    builder = IndexBuilder()

    if builder.needs_rebuild():

        logger.info("Changes detected.")
        logger.info("Rebuilding vector store...")

        success = builder.build()

        if success:
            logger.info("Knowledge base is up to date.")
        else:
            logger.error("Vector store rebuild failed.")

    else:
        logger.info("Knowledge base already up-to-date.")


if __name__ == "__main__":
    main()