import React from 'react';
import type { Course } from '../types';
import styles from './DetailModal.module.css';

interface DetailModalProps {
  course: Course;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  course,
  onClose
}) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        
        <div className={styles.header}>
          <h2>{course.code}</h2>
          <p className={styles.title}>{course.name}</p>
          <p className={styles.credits}>{course.credits} Credit Hours</p>
        </div>

        {course.description && (
          <div className={styles.section}>
            <h3>Description</h3>
            <p>{course.description}</p>
          </div>
        )}

        {course.notes && (
          <div className={styles.section}>
            <h3>Notes</h3>
            <p>{course.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
};
