# Build python dependencies
FROM python:3.11-slim AS pybuilder

WORKDIR /project

RUN apt update && apt install -y uvicorn
RUN python -m pip --no-cache-dir install uv

COPY pyproject.toml uv.lock /project/
COPY ./api /project/api/
COPY .env /project/api/backend

RUN uv sync

# Create final image
FROM python:3.11-slim

WORKDIR /project

COPY --from=pybuilder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=pybuilder /project/ /project/
COPY --from=pybuilder /usr/local/bin /usr/local/bin

EXPOSE 8000

CMD [ "uv", "run", "--with", "uvicorn", "python", "-m", "uvicorn", "api.backend.app:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]