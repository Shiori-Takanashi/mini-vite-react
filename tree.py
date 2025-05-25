from pathlib import Path
from typing import Tuple, Sequence

IGNORE_DIRS = {".git", "dist", "node_modules"}


def collect_paths(root: Path) -> Tuple[list[Path], list[Path]]:
    directories = []
    files = []

    ignore_paths = {root / name for name in IGNORE_DIRS}

    def is_ignored(p: Path) -> bool:
        return any(ignored in p.parents for ignored in ignore_paths)

    for path in root.glob("**/*"):
        if path in ignore_paths:
            directories.append(path)  # ルート直下の無視対象ディレクトリは含める
        elif is_ignored(path):
            continue
        elif path.is_dir():
            directories.append(path)
        elif path.is_file():
            files.append(path)

    return directories, files


def format_relative_path(path: Path, root: Path) -> str:
    """プロジェクトルート名を含めた相対パスを返す"""
    return str(path.relative_to(root.parent))


def write_tree_file(
    out_path: Path,
    directories: Sequence[Path],
    files: Sequence[Path],
    root: Path,
) -> Tuple[bool, str | None]:
    try:
        with out_path.open("w", encoding="utf-8") as f:
            f.write("DIRS\n")
            for d in directories:
                f.write(f"{format_relative_path(d, root)}\n")
            f.write("******\n")
            for file in files:
                f.write(f"{format_relative_path(file, root)}\n")
        return True, None
    except Exception as e:
        return False, str(e)


def main() -> None:
    root = Path.cwd()
    directories, files = collect_paths(root)

    tree_file = root / "tree.txt"
    success, error = write_tree_file(tree_file, directories, files, root)

    if success:
        print("Complete!!!")
    else:
        print(f"Failed...\n{error}")


if __name__ == "__main__":
    main()

# ローカルに当該ファイルを復元
