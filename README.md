# Automac 🚀

**Automac** ek powerful aur user-friendly AutoML library hai jo machine learning models ki hyperparameter tuning ko automate karti hai. Ye **Optuna** ka use karke best parameters dhoondti hai aur **Multithreading** ke zariye saare models ko parallel mein tune karti hai.

---

## ✨ Features
- **Parallel Tuning:** Ek saath multiple models (XGBoost, Random Forest, etc.) tune karein.
- **8+ Models Supported:** `rf`, `xgb`, `lgb`, `cat`, `ada`, `dt`, `svm`, `knn`.
- **Smart Suggestions:** Agar aap galat model key daalte hain, toh library aapko sahi options suggest karti hai.
- **Custom Base Learners:** AdaBoost jaise models mein aap apna base learner (DT ya Logistic) bhi tune kar sakte hain.

---

## 🛠️ Installation

Aap ise PyPI se install kar sakte hain:

```bash
pip install automac