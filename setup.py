from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in abz_custom/__init__.py
from abz_custom import __version__ as version

setup(
	name="abz_custom",
	version=version,
	description="ABZ Custom",
	author="ParaLogic",
	author_email="info@paralogic.io",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
